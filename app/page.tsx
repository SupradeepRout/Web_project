"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Search, ShoppingCart, Download, HelpCircle } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function UdemyCertificatePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`https://www.udemy.com/courses/search/?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  const handleDownload = () => {
    // Create a link element
    const link = document.createElement("a")

    // Set the href to the certificate image URL
    link.href = "/certificate.png"

    // Set the download attribute with a filename
    link.download = "udemy-certificate.png"

    // Append to the document
    document.body.appendChild(link)

    // Trigger the download
    link.click()

    // Clean up
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <header className="py-2 px-4 sticky top-0 bg-white shadow-[0_4px_6px_-2px_rgba(128,128,128,0.3)] z-10">
        <div className="flex items-center justify-between w-full px-0 max-w-screen-4xl mx-auto ">
          <div className="flex items-center gap-8 flex-1 ">
            <Link href="https://www.udemy.com/" className="mr-2">
              <Image src="https://assets.bitdegree.org/online-learning-platforms/storage/media/udemy-logo-big.o.png" alt="Udemy" width={11} height={9} className="h-14 w-auto" />
            </Link>
            <button className="text-sm font-medium hover:text-purple-600">Explore</button>
            <div className="relative flex-1 max-w-6xl ">
              <form onSubmit={handleSearch} className="w-full">
                <div className="flex items-center border border-gray-300 rounded-full px-3 py-2 bg-gray-15 w-full">
                  <Search className="h-6 w-4 text-gray-500 mr-2 flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Find expert-led courses to boost your career"
                    className="bg-transparent outline-none w-full text-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button type="submit" className="sr-only">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm ml-4 ">
            <Link
              href="https://www.udemy.com/pricing/"
              className="hidden md:block hover:text-purple-600 whitespace-nowrap"
            >
              Plans & Pricing
            </Link>
            <Link
              href="https://www.udemy.com/business/"
              className="hidden md:block hover:text-purple-600 whitespace-nowrap"
            >
              Udemy Business
            </Link>
            <Link
              href="https://www.udemy.com/teaching/"
              className="hidden md:block hover:text-purple-600 whitespace-nowrap"
            >
              Teach on Udemy
            </Link>
            <Link href="https://www.udemy.com/cart/" className="hover:text-purple-600">
              <ShoppingCart className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.udemy.com/join/login-popup/"
              className="border border-black text-purple-600 px-3 py-1.5 rounded-md font-medium hover:bg-purple-50 whitespace-nowrap"
            >
              Log in
            </Link>
            <Link
              href="https://www.udemy.com/join/signup-popup/"
              className="border border-black bg-purple-600 text-white px-3 py-1.5 rounded-md font-medium hover:bg-purple-700 whitespace-nowrap"
            >
              Sign up
            </Link>
            <button className="border border-black p-2 rounded-md hover:bg-gray-100">
              <span className="sr-only">Language</span>
              <span className="font-bold text-sm">🌐</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-6">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          {/* Certificate Section - 2/3 width */}
          <div className="md:col-span-2">
            <div className="border border-gray-300 rounded-md p-6 bg-white">
              <Image
                src="/certificate.png"
                alt="Certificate of Completion"
                width={1200}
                height={900}
                className="w-full h-auto"
                priority
              />
            </div>

            <div className="mt-6 text-gray-700">
              <p>
                This certificate above verifies that <span className="text-purple-600">Supradeep Rout</span>{" "}
                successfully completed the course{" "}
                <Link
                  href="https://www.udemy.com/course/the-complete-web-development-bootcamp/"
                  className="text-purple-600"
                >
                  The Complete Full-Stack Web Development Bootcamp
                </Link>{" "}
                on 04/27/2025 as taught by{" "}
                <span className="text-purple-600">Dr. Angela Yu, Developer and Lead Instructor</span> on Udemy. The
                certificate indicates the entire course was completed as validated by the student. The course duration
                represents the total video hours of the course at time of most recent completion.
              </p>
            </div>
          </div>

          {/* Right Sidebar - 1/3 width */}
          <div className="md:col-span-1">
            <div className="mb-8">
              <h2 className="text-lg font-medium mb-4">Certificate Recipient:</h2>
              <div className="flex items-center gap-3">
                <div className="bg-gray-800 text-white w-10 h-10 rounded-full flex items-center justify-center font-medium">
                  SR
                </div>
                <span className="font-medium">Supradeep Rout</span>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-4">About the Course:</h2>
              <Link href="https://www.udemy.com/course/the-complete-web-development-bootcamp/" className="block mb-4">
                <Image
                  src="/course-image.jpg"
                  alt="The Complete Full-Stack Web Development Bootcamp"
                  width={330}
                  height={205}
                  className="rounded-md bg-green-200"
                />
              </Link>
              <Link
                href="https://www.udemy.com/course/the-complete-web-development-bootcamp/"
                className="block mb-2 font-medium hover:text-purple-600"
              >
                The Complete Full-Stack Web Development Bootcamp
              </Link>
              <p className="text-sm text-gray-600 mb-2">Dr. Angela Yu, Developer and Lead Instructor</p>
              <div className="flex items-center gap-1 mb-1">
                <span className="text-amber-500 font-bold">4.7</span>
                <div className="flex">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} className={`text-xs ${i < 4 ? "text-amber-500" : "text-gray-300"}`}>
                      {star}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-gray-600">(435,150)</span>
              </div>
              <p className="text-xs text-gray-600 mb-2">61.5 total hours · 374 lectures</p>
              <p className="font-bold text-lg mb-1">₹3,099</p>
              <div className="inline-block bg-teal-100 text-teal-700 text-xs font-medium px-2 py-0.5 rounded mb-4">
                Bestseller
              </div>
              <button
                onClick={handleDownload}
                className="flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 px-4 text-purple-600 font-medium hover:bg-gray-50 w-max"
              >
                <Download className="h-4 w-4" />
                Download
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
