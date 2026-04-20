import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputText from "../components/ui/InputText";
import InputPassword from "../components/ui/InputPassword";
import InputEmail from "../components/ui/InputEmail";
import SelectEvent from "../components/ui/SelectEvent";
import InputBio from "../components/ui/InputBio";
import Button from "../components/Button";

type FormData={
    username: string;
    email: string;
    password: string;
    category: string;
    bio: string;
}

const schema =z.object ({
    username: z.string().min(1,"Username harus diisi"),
    email: z.string().email("Email tidak valid"),
    password:z.string().min(8,"Password minimal 8 karakter"),
    category: z.string().min(1,"Kategori event harus dipilih"),
    bio: z.string().min(50,"Bio minimal 50 karakter dan wajib diisi")
    
})
export default function Login() {
    const {register,
        handleSubmit,
        formState:{errors}
    }=useForm<FormData>({resolver:zodResolver(schema)});
    const onSubmit = (data:FormData) => {
        console.log(data)
    }
    return (
<div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
    
    <h1 className="text-xl font-bold mb-4 text-center">
      FORM REGISTRASI EVENT
    </h1>

    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

      <InputText
        label="Nama Lengkap"
        name="username"
        register={register}
        error={errors.username?.message}
      />

      <InputEmail
        label="Email"
        name="email"
        register={register}
        error={errors.email?.message}
      />

      <InputPassword
        label="Password"
        name="password"
        register={register}
        error={errors.password?.message}
      />

      <SelectEvent
        label="Kategori Event"
        name="category"
        register={register}
        options={[
          { label: "Seminar", value: "seminar" },
          { label: "Workshop", value: "workshop" },
          { label: "Lomba", value: "lomba" },
          { label: "Webinar", value: "webinar" },
        ]}
        error={errors.category?.message}
      />

      <InputBio
        label="Bio"
        name="bio"
        register={register}
        error={errors.bio?.message}
        placeholder="Tulis bio Anda"
      />

      <Button title="Daftar" variant="primary" />
    </form>

  </div>
  </div>
);
}