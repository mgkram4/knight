"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ReactElement, useRef, useState } from 'react'
import { BsFileEarmarkImage, BsImage, BsShield } from 'react-icons/bs'
import { FaCrown, FaMale, FaScroll, FaTelegram, FaTwitter } from 'react-icons/fa'
import { GiCastle, GiCrossedSwords, GiDragonShield, GiSpellBook, GiTreasureMap } from 'react-icons/gi'
import { MdOutlineEmojiEmotions } from 'react-icons/md'

export default function Home() {
  const [copied, setCopied] = useState(false);
  const { scrollY } = useScroll();
  const ref = useRef(null);

  const codeNumber = "LVCQ1YmeK6DECKqcwmscyDRxUYJpiGth9ppGKtopump";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const backgroundY = useTransform(scrollY, [0, 500], ['0%', '50%']);
  const textY = useTransform(scrollY, [0, 300], ['0%', '100%']);
  const opacity = useTransform(scrollY, [0, 300, 500], [1, 0.5, 0]);

  const memeImages = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
    '15.jpg',
  ];

  return (
    <main className="relative bg-stone-900 text-amber-100 font-medieval overflow-hidden" ref={ref}>
      <MedievalDecoration className="top-10 left-10 transform -rotate-15" />
      <MedievalDecoration className="bottom-10 right-10 transform rotate-15" />
      <MedievalDecoration className="top-1/2 left-1/4 transform -translate-y-1/2 rotate-45" />

      <motion.div 
        className="fixed top-0 left-0 w-full h-full z-0"
        style={{ y: backgroundY }}
      >
        <Image
          src="/hero2.png"
          alt="$KNIGHT Background"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>

      <div className="relative z-10">
        <motion.section 
          className="min-h-screen flex flex-col justify-center items-center text-center px-4"
          style={{ y: textY, opacity }}
        >
          <div className="bg-stone-800 bg-opacity-90 mt-80 md:mt-96 p-6 rounded-lg mb-6 border-4 border-amber-700 shadow-lg transform rotate-1">
            <code className="select-all text-lg md:text-xl font-bold text-amber-500">
              {codeNumber}
            </code>
          </div>
          <motion.button
            onClick={copyToClipboard}
            className="bg-red-900 hover:bg-red-800 text-amber-100 font-bold py-3 px-6 rounded-full transition duration-300 border-2 border-amber-600 shadow-lg transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {copied ? "Huzzah! Copied!" : "Copy The Sacred Code"}
          </motion.button>
        </motion.section>

        <motion.section 
          className="min-h-screen py-16 relative overflow-hidden flex items-center"
          style={{
            backgroundImage: "url('/2024-10-08 15.00.16.jpg')",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        >
          <div className="absolute inset-0 bg-stone-900 bg-opacity-75"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center text-amber-500 shadow-text">The $KNIGHT's Creed</h2>
            <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto mb-12 text-amber-200 italic">
              $KNIGHT embodies the spirit of resilience and honor in a changing realm. It is not merely a tale, but a character for brave souls to embody - a symbol of rising from the ashes of defeat and reclaiming one's destiny.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-stone-800 bg-opacity-50 p-8 rounded-lg shadow-lg border-4 border-amber-700 transform -rotate-1"
              >
                <h3 className="text-3xl font-bold mb-6 text-amber-500 flex items-center">
                  <GiDragonShield className="mr-3 text-4xl" /> Virtues of the Order
                </h3>
                <ul className="list-none list-inside text-amber-200 space-y-4">
                  {[
                    { icon: <FaMale/>, text: "Unwavering honor in the face of temptation" },
                    { icon: <BsShield />, text: "Resilience against the tides of adversity" },
                    { icon: <GiCrossedSwords />, text: "Adaptability in a realm of constant change" },
                    { icon: <FaCrown />, text: "Loyalty to our sacred community" }
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center text-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="mr-3 text-2xl text-amber-400">{item.icon}</span> {item.text}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-stone-800 bg-opacity-50 p-8 rounded-lg shadow-lg border-4 border-amber-700 transform rotate-1"
              >
                <h3 className="text-3xl font-bold mb-6 text-amber-500 flex items-center">
                  <GiTreasureMap className="mr-3 text-4xl" /> Trials of the Modern Crusade
                </h3>
                <ul className="list-none list-inside text-amber-200 space-y-4">
                  {[
                    { icon: <GiSpellBook />, text: "Navigating the treacherous digital realms" },
                    { icon: <FaScroll />, text: "Balancing ancient traditions with newfound powers" },
                    { icon: <BsShield />, text: "Forging trust in an age of deceit" },
                    { icon: <FaCrown />, text: "Leading by example in a world of chaos" }
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center text-lg"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="mr-3 text-2xl text-amber-400">{item.icon}</span> {item.text}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="min-h-screen py-16 relative overflow-hidden flex items-center"
          style={{
            backgroundImage: "url('/2024-10-08 15.00.03.jpg')",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        >
          <div className="absolute inset-0 bg-stone-900 bg-opacity-75"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center text-amber-500 shadow-text">Artifacts of Power</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <FeatureCard 
                icon={<BsImage size={64} />}
                title="Sacred Gallery"
                description="Behold $KNIGHT-inspired masterpieces that capture the essence of our legendary journey."
                image="/2024-10-08 15.00.38.jpg"
              />
              <FeatureCard 
                icon={<MdOutlineEmojiEmotions size={64} />}
                title="Jester's Corner"
                description="Craft and share legendary $KNIGHT memes to spread laughter throughout the realm."
                image="/2024-10-08 15.00.52.jpg"
              />
              <FeatureCard 
                icon={<BsFileEarmarkImage size={64} />}
                title="Royal Tapestries"
                description="Adorn your digital quarters with $KNIGHT banners and showcase your allegiance."
                image="/2024-10-08 15.01.04.jpg"
              />
            </div>
          </div>
        </motion.section>

        <section className="min-h-screen py-16 relative overflow-hidden flex items-center bg-stone-900">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center text-amber-500 shadow-text">Meme Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {memeImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative h-96 sm:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg border-4 border-amber-700 transform hover:scale-105 transition duration-300"
                  whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 1 : -1 }}
                >
                  <Image
                    src={`/${image}`}
                    alt={`Meme ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="min-h-screen relative overflow-hidden flex items-center justify-center bg-stone-900">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/IMG_2963.MP4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-stone-900 bg-opacity-50"></div>
          <div className="relative z-10 text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-amber-500 shadow-text">$KNIGHT in Motion</h2>
            <p className="text-2xl text-amber-200">Witness the legend come alive</p>
          </div>
        </section>

        <motion.section 
          className="min-h-screen py-16 relative overflow-hidden flex items-center"
          style={{
            backgroundImage: "url('/2024-10-08 15.01.15.jpg')",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        >
          <div className="absolute inset-0 bg-stone-900 bg-opacity-75"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-amber-500 shadow-text">Join the Round Table</h2>
            <div className="flex justify-center space-x-12 mb-12">
              <Link href="#" className="text-amber-400 hover:text-amber-300 transition-colors duration-300 transform hover:scale-110">
                <FaTelegram size={48} />
              </Link>
              <Link href="#" className="text-amber-400 hover:text-amber-300 transition-colors duration-300 transform hover:scale-110">
                <FaTwitter size={48} />
              </Link>
            </div>
            <p className="text-2xl text-amber-200">Unite with fellow $KNIGHTs and embark on the grand quest</p>
          </div>
        </motion.section>

        <footer className="py-8 bg-stone-900 border-t-4 border-amber-700">
          <div className="container mx-auto px-4 text-center text-amber-300">
            <p className="text-lg">© 2024 $KNIGHT. All rights reserved by royal decree.</p>
          </div>
        </footer>
      </div>
    </main>
  )
}

interface CardProps {
  icon: ReactElement;
  title: string;
  description: string;
  image: string;
}

function FeatureCard({ icon, title, description, image }: CardProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05, rotate: 1 }}
      className="bg-stone-800 bg-opacity-50 p-8 rounded-lg shadow-lg text-center border-4 border-amber-700 transition duration-300 items-center relative overflow-hidden transform hover:rotate-1"
    >
      <Image
        src={image}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-30"
      />
      <div className="relative z-10">
        <motion.div 
          className="text-amber-500 mb-6 flex justify-center"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-3xl font-bold mb-4 text-amber-400">{title}</h3>
        <p className="text-xl text-amber-200">{description}</p>
      </div>
    </motion.div>
  )
}

function MedievalDecoration({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <GiCastle className="text-amber-700 opacity-20" size={64} />
    </div>
  )
}

