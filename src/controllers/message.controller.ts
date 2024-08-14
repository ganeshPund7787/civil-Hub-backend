import { Request, Response, NextFunction } from "express";
import { Conversation } from "../models/conversation.model";
import { Message } from "../models/message.model";
import { getReceiverSocketId, io } from "../socket/socket";

export const sendMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { message }: { message: string } = req.body;
    const { id: receiverId }: any = req.params;
    const senderId = req._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = new Conversation({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation?.messages?.push(newMessage._id);
    }

    await Promise.all([newMessage.save(), conversation.save()]);

    // SOCKET.IO FUNCTIONALITY
    const receiverSocketId = getReceiverSocketId(receiverId);

    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.error(`Error while sending message: ${error}`);
    next(error);
  }
};

export const getMessages = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req._id;
    console.log(userToChatId);
    console.log(senderId);
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");

    if (!conversation) return res.status(200).json([]);

    const messages = conversation?.messages;
    
    res.status(200).json(messages);
  } catch (error) {
    next(error);
  }
};
