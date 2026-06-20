


// "use client";

// import { useState } from "react";
// import { Card, Button, Link, TextField, Label, InputGroup, Input, FieldError, ListBox } from "@heroui/react";
// import { Eye, EyeSlash, Person, At, ShieldKeyhole } from "@gravity-ui/icons";
// // FIX 1: Import authClient instead of signUp
// // import { authClient } from "@/lib/auth-client";
// // Replace the "@/lib/auth-client" line with this:
// import { authClient } from "../../../lib/auth-client";

// export default function SignupPage() {
//     // Form fields
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     // UI States
//     const [isVisible, setIsVisible] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState("");
//     const [success, setSuccess] = useState("");

//     const toggleVisibility = () => setIsVisible(!isVisible);

//     const handleSignup = async (e) => {
//         e.preventDefault();

//         setError("");
//         setSuccess("");
//         setIsLoading(true);

//         try {
//             // FIX 2: Call authClient.signUp.email instead of signUp.email
//             const { data, error: authError } = await authClient.signUp.email({
//                 email,
//                 password,
//                 name,
//                 callbackURL: "/",
//             });

//             if (authError) {
//                 setError(authError.message || "Something went wrong during signup.");
//             } else {
//                 setSuccess("Account created successfully! Welcome.");
//                 setName("");
//                 setEmail("");
//                 setPassword("");
//             }
//         } catch (err) {
//             setError("An unexpected network error occurred.");
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-4">
//             <Card className="w-full max-w-md p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">

//                 {/* Header Container */}
//                 <div className="flex flex-col items-center justify-center gap-1 pb-6 border-b border-zinc-100 dark:border-zinc-800 mb-6 text-center">
//                     <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">Create an account</h1>
//                     <p className="text-sm text-zinc-600 dark:text-zinc-400">Fill in the fields below to get started</p>
//                 </div>

//                 {/* Form Body */}
//                 <form onSubmit={handleSignup} className="flex flex-col gap-5">

//                     {/* Name Field */}
//                     <TextField isRequired name="name" className="flex flex-col gap-1.5">
//                         <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Name</Label>
//                         <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900 focus-within:border-primary transition-colors">
//                             <Person className="text-zinc-400 pointer-events-none" size={16} />
//                             <Input
//                                 type="text"
//                                 placeholder="Enter your full name"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                                 className="w-full bg-transparent py-2 text-sm outline-none border-none text-zinc-900 dark:text-zinc-100"
//                             />
//                         </InputGroup>
//                     </TextField>

//                     {/* Email Field */}
//                     <TextField isRequired name="email" type="email" className="flex flex-col gap-1.5">
//                         <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Email Address</Label>
//                         <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900 focus-within:border-primary transition-colors">
//                             <At className="text-zinc-400 pointer-events-none" size={16} />
//                             <Input
//                                 placeholder="you@example.com"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 className="w-full bg-transparent py-2 text-sm outline-none border-none text-zinc-900 dark:text-zinc-100"
//                             />
//                         </InputGroup>
//                     </TextField>

//                     {/* Password Field */}
//                     <TextField isRequired name="password" className="flex flex-col gap-1.5">
//                         <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Password</Label>
//                         <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900 focus-within:border-primary transition-colors">
//                             <ShieldKeyhole className="text-zinc-400 pointer-events-none" size={16} />
//                             <Input
//                                 type={isVisible ? "text" : "password"}
//                                 placeholder="Choose a password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 className="w-full bg-transparent py-2 text-sm outline-none border-none text-zinc-900 dark:text-zinc-100"
//                             />
//                             <button
//                                 className="focus:outline-none text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition"
//                                 type="button"
//                                 onClick={toggleVisibility}
//                                 aria-label="toggle password visibility"
//                             >
//                                 {isVisible ? <EyeSlash size={18} /> : <Eye size={18} />}
//                             </button>
//                         </InputGroup>
//                     </TextField>

//                     {/* Dynamic Status Badges */}
//                     {error && (
//                         <div className="p-3.5 text-xs font-medium rounded-xl bg-red-100/60 dark:bg-red-950/50 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-900">
//                             <span className="font-semibold">Error:</span> {error}
//                         </div>
//                     )}

//                     {success && (
//                         <div className="p-3.5 text-xs font-medium rounded-xl bg-emerald-100/60 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900">
//                             <span className="font-semibold">Success:</span> {success}
//                         </div>
//                     )}

//                     {/* Action Button */}

                 
//               <Select isRequired name="role" placeholder="Select one">
//                 <Label>Signup As</Label>
//                 <Select.Trigger>
//                   <Select.Value />
//                   <Select.Indicator />
//                 </Select.Trigger>
//                 <Select.Popover>
//                   <ListBox>
//                     <ListBox.Item id="buyer" textValue="buyer">
//                       Buyer
//                       <ListBox.ItemIndicator />
//                     </ListBox.Item>
//                     <ListBox.Item id="seller" textValue="seller">
//                       Seller
//                       <ListBox.ItemIndicator />
//                     </ListBox.Item>
//                   </ListBox>
//                 </Select.Popover>
//               </Select>

//                     <Button
//                         type="submit"
//                         color="primary"
//                         className="w-full font-semibold rounded-xl text-sm h-12"
//                         isLoading={isLoading}
//                         isDisabled={isLoading}
//                     >
//                         Sign Up
//                     </Button>

//                     {/* Navigation Option */}
//                     <div className="text-center pt-4 border-t border-zinc-100 dark:border-zinc-800 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
//                         Already have an account?{" "}
//                         <Link href="/auth/signin" className="font-medium cursor-pointer text-sm text-blue-600 dark:text-blue-400">
//                             Sign in instead
//                         </Link>
//                     </div>

//                 </form>
//             </Card>
//         </div>
//     );
// }



"use client";

import { useState } from "react";
import {
  Card,
  Button,
  Link,
  TextField,
  Label,
  InputGroup,
  Input,
} from "@heroui/react";
import {
  Eye,
  EyeSlash,
  Person,
  At,
  ShieldKeyhole,
} from "@gravity-ui/icons";

import { authClient } from "../../../lib/auth-client";

export default function SignupPage() {
  // Form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  // UI States
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSignup = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!role) {
      setError("Please select a role.");
      return;
    }

    setIsLoading(true);

    try {
      const { error: authError } = await authClient.signUp.email({
        email,
        password,
        name,
        role, // Make sure backend supports this field
        callbackURL: "/",
      });

      if (authError) {
        setError(
          authError.message || "Something went wrong during signup."
        );
      } else {
        setSuccess("Account created successfully! Welcome.");

        setName("");
        setEmail("");
        setPassword("");
        setRole("");
      }
    } catch (err) {
      setError("An unexpected network error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-4">
      <Card className="w-full max-w-md p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">
        {/* Header */}
        <div className="flex flex-col items-center justify-center gap-1 pb-6 border-b border-zinc-100 dark:border-zinc-800 mb-6 text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            Create an account
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Fill in the fields below to get started
          </p>
        </div>

        <form onSubmit={handleSignup} className="flex flex-col gap-5">
          {/* Name */}
          <TextField isRequired name="name" className="flex flex-col gap-1.5">
            <Label>Name</Label>
            <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3">
              <Person size={16} />
              <Input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent py-2"
              />
            </InputGroup>
          </TextField>

          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            className="flex flex-col gap-1.5"
          >
            <Label>Email Address</Label>
            <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3">
              <At size={16} />
              <Input
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent py-2"
              />
            </InputGroup>
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            name="password"
            className="flex flex-col gap-1.5"
          >
            <Label>Password</Label>
            <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3">
              <ShieldKeyhole size={16} />

              <Input
                type={isVisible ? "text" : "password"}
                placeholder="Choose a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent py-2"
              />

              <button
                type="button"
                onClick={toggleVisibility}
                className="text-zinc-400"
              >
                {isVisible ? <EyeSlash size={18} /> : <Eye size={18} />}
              </button>
            </InputGroup>
          </TextField>

          {/* Role */}
          <div className="flex flex-col gap-1.5">
            <Label>Signup As</Label>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-3 py-3 text-sm"
            >
           
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
          </div>

          {/* Error */}
          {error && (
            <div className="p-3 rounded-xl bg-red-100 text-red-700 text-sm">
              {error}
            </div>
          )}

          {/* Success */}
          {success && (
            <div className="p-3 rounded-xl bg-green-100 text-green-700 text-sm">
              {success}
            </div>
          )}

          {/* Submit */}
          <Button
            type="submit"
            color="primary"
            className="w-full h-12 rounded-xl font-semibold"
            isLoading={isLoading}
            isDisabled={isLoading}
          >
            Sign Up
          </Button>

          {/* Sign In */}
          <div className="text-center text-sm text-zinc-600 dark:text-zinc-400">
            Already have an account?{" "}
            <Link href="/auth/signin">
              Sign in instead
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}