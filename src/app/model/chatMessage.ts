export interface ChatMessage {
  sender: string;
  content?: string;
  type: MessageType;
  date: Date;
}

export enum MessageType {
  CHAT = "CHAT",
  JOIN = "JOIN",
  LEAVE = "LEAVE"
}
