'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { X } from 'lucide-react'
import Image from 'next/image'

export default function NewArticleModal({
  isOpen,
  closeModal,
}: {
  isOpen: boolean
  closeModal: () => void
}) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        {/* Backdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>

        {/* Modal */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                  <Dialog.Title className="text-xl font-bold">+ Buat artikel baru</Dialog.Title>
                  <button onClick={closeModal}>
                    <X className="w-5 h-5 text-black" />
                  </button>
                </div>

                {/* Image Upload Box */}
                <div className="w-32 h-32 border rounded-xl flex items-center justify-center bg-gray-50 mb-5">
                  <span className="text-3xl text-gray-400">+</span>
                </div>

                {/* Title Input with Avatar */}
                <div className="flex items-center gap-2 mb-4 border rounded-md px-4 py-2 bg-white">
                  <Image
                    src="/avatar-placeholder.png" // ganti ke path avatar kamu
                    alt="avatar"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <input
                    type="text"
                    placeholder="Berikan Judul Artikel.."
                    className="w-full focus:outline-none text-sm"
                  />
                </div>

                {/* Content Textarea */}
                <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                      <div className="bg-gray-50 px-4 pt-3 pb-2 border-b">
                          <label className="block text-base font-semibold">Mulai Menulis</label>
                      </div>
                      <textarea
                          rows={6}
                          placeholder="Bagikan pendapatmu.."
                          className="w-full px-4 py-3 text-sm resize-none focus:outline-none bg-white placeholder:text-gray-400"/>
                </div>
                {/* Upload Button */}
                <div className="flex justify-start">
                  <button className="text-white px-6 py-2 rounded-md transition"style={{ backgroundColor: '#4E6148' }}>
                    Unggah Artikel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
