import { z } from "zod";

export const editSchema = z.object({
  NAMA_DEPAN: z.string("Nama depan tidak valid!"),
  NAMA_BELAKANG: z.string("Nama belakang tidak valid!"),
  USERNAME: z.string("Username tidak valid!"),
  HANDPHONE: z.string("Nomer handphone tidak valid!"),
  EMAIL: z.string().email("Email tidak valid!"),
  BIODATA: z.string("Biodata tidak valid!"),
});
