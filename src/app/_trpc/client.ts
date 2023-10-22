import { AppRouter } from "@/trpc"
import { createTRPCReact } from "@tRPC/react-query";

export const  trpc = createTRPCReact<AppRouter>({})