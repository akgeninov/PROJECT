import { z } from "zod";

export const signUpSchema = z
  .object({
    NAMA_LENGKAP: z.string("Nama lengkap tidak valid!"),
    USERNAME: z.string("Username tidak valid!"),
    HANDPHONE: z.string("Nomer handphone tidak valid!"),
    EMAIL: z.string().email("Email tidak valid!"),
    PASSWORD: z.string().min(10, "Password setidaknya harus 10 karakter!"),
    CONFIRM_PASSWORD: z.string(),
  })
  .refine((data) => data.PASSWORD === data.CONFIRM_PASSWORD, {
    message: "Confirm password harus sama dengan password!",
    path: ["CONFIRM_PASSWORD"],
  });
