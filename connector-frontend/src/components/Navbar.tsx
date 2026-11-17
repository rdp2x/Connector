"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { UserIcon } from "lucide-react";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleLoginClick = () => {
    setIsModalOpen(false);
    router.push("/login");
  };

  const handleRegisterClick = () => {
    setIsModalOpen(false);
    router.push("/register");
  };

  return (
    <>
      <div className="fixed left-0 top-0 w-full h-24 bg-black flex items-center justify-end px-6">
        <Button
          className="text-white hover:bg-gray-800"
          onClick={() => setIsModalOpen(true)}
        >
          <UserIcon className="h-5 w-5 mr-2" />
          Account
        </Button>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Account</DialogTitle>
            <DialogDescription>No user logged in</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col space-y-3 mt-4">
            <Button onClick={handleLoginClick}>Login</Button>
            <Button onClick={handleRegisterClick}>Register</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navbar;
