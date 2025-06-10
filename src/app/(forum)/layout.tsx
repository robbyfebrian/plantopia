'use client'

import { useState } from 'react'
import Sidebar from '../../../components/layout/sidebar'
import Navbar from '../../../components/layout/navbar'
import { Home, FlameIcon, Bookmark } from 'lucide-react'
import NewArticleModal from '../../../features/Forum/NewArticleModal'

export default function ForumLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar style="dark" />
      <div className="flex flex-1">
        <Sidebar
          buttonLabel="New Article"
          onButtonClick={() => setIsModalOpen(true)}
          navItems={[
            { label: 'My Article', href: '/article', icon: <Home size={18} /> },
            { label: 'Explore', href: '/explore', icon: <FlameIcon size={18} /> },
            { label: 'Saved', href: '/saved', icon: <Bookmark size={18} /> },
          ]}
        />
        <main className="flex-1 bg-gray-50">
          {children}
        </main>
      </div>

      {/* Modal Component */}
      <NewArticleModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
    </div>
  )
}
