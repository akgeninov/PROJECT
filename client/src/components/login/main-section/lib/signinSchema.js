import { z } from "zod";

export const signInSchema = z.object({
  EMAIL: z.string().email("Email tidak valid!"),
  PASSWORD: z.string().min(10, "Password setidaknya harus 10 karakter!"),
});
