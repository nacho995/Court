import { Injectable } from '@nestjs/common';
import { ChatOpenAI } from '@langchain/openai';
import { PrismaService } from '../prisma.service';
import { HumanMessage, SystemMessage } from '@langchain/core/messages';

@Injectable()
export class AiService {
  private llm: ChatOpenAI;

  constructor(private readonly prisma: PrismaService) {
    this.llm = new ChatOpenAI({
      modelName: 'gpt-4o-mini',
      temperature: 0,
    });
  }

  async chat(question: string): Promise<string> {
    const members = await this.prisma.member.findMany();
    const courts = await this.prisma.court.findMany();
    const bookings = await this.prisma.booking.findMany();
    const context = `
    Miembros del club: ${JSON.stringify(members)}
    Pistas: ${JSON.stringify(courts)}
    Reservas: ${JSON.stringify(bookings)}
  `;
    //llamar al llm
    const response = await this.llm.invoke([
      new SystemMessage(`Eres el asistente IA de un club de deportes de raqueta.
      Responde basándote en estos datos:\n${context}`),
      new HumanMessage(question),
    ]);
    return response.content as string;
  }
}
