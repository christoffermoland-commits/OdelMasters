"use client";

import { useState, useRef } from "react";
import { compressImage } from "@/lib/imageUtils";

interface ImageUploadProps {
  onImageSelect: (base64: string | null) => void;
  currentImage?: string | null;
}

export default function ImageUpload({
  onImageSelect,
  currentImage,
}: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(currentImage ?? null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Vennligst velg en bildefil.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert("Bildet er for stort. Maks 5MB.");
      return;
    }

    setLoading(true);
    try {
      const compressed = await compressImage(file);
      setPreview(compressed);
      onImageSelect(compressed);
    } catch {
      alert("Kunne ikke laste bildet. Prøv igjen.");
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = () => {
    setPreview(null);
    onImageSelect(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Preview circle or placeholder */}
      <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300 bg-gray-100 flex items-center justify-center">
        {preview ? (
          <img
            src={preview}
            alt="Profilbilde"
            className="w-full h-full object-cover"
          />
        ) : (
          <svg
            className="w-10 h-10 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0116.5 0"
            />
          </svg>
        )}
      </div>

      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={loading}
          className="text-sm text-masters-green hover:text-masters-dark font-medium underline transition-colors disabled:opacity-50 cursor-pointer"
        >
          {loading ? "Laster..." : preview ? "Bytt bilde" : "Last opp bilde"}
        </button>
        {preview && (
          <button
            type="button"
            onClick={handleRemove}
            className="text-sm text-masters-red hover:text-red-700 font-medium underline transition-colors cursor-pointer"
          >
            Fjern
          </button>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}
