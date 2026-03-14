"use client";

import { useState } from "react";
import Modal from "./Modal";
import RegistrationForm from "./RegistrationForm";

export default function RegistrationSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full bg-masters-gold hover:bg-masters-yellow text-masters-dark font-bold py-4 px-8 rounded-lg transition-colors text-xl shadow-md hover:shadow-lg cursor-pointer"
      >
        Meld deg på
      </button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Påmelding"
      >
        <RegistrationForm onSuccess={() => setIsOpen(false)} />
      </Modal>
    </>
  );
}
