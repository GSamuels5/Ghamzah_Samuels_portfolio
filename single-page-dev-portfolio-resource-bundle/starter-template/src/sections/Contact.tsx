import React from 'react';
import ArrowUpRight from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';

export const ContactSection = () => {
  return (
    <section className="py-20  lg:py-28 ">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl relative overflow-hidden z-0">
          <div className="absolute inset-0 opacity-5 -z-10" style={{
            backgroundImage: `url(${grainImage.src})`
          }}></div>
          <div className="grid max-w-6xl grid-cols-1 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
            <div className="py-6 md:py-0 md:px-6">
              <h1 className="text-4xl font-bold font-serif">Get in touch</h1>
              <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Lavender Hill,Retreat,  Cape Town</span>
                </p>
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span>062 298 9711</span>
                </p>
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span>ghamzahsamuels23@gmail.com</span>
                </p>
              </div>
            </div>
            <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
             action="https://formspree.io/f/xjkvvozz"
             method="POST">
              <label className="block">
                <span className="mb-1">First Name</span>
                <input type="text" name='First name' placeholder="First Name" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-blue-600 bg-white px-3" />
              </label>
              <label className="block">
                <span className="mb-1">Email address</span>
                <input type="email" name='email' placeholder="yourname@company.com" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-blue-600 px-3 bg-white" />
              </label>
              <label className="block">
                <span className="mb-1">Message</span>
                <textarea rows={3} name="message" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-600 bg-white"></textarea>
              </label>
              <button type="submit" className="self-center px-8 py-3 rounded-xl font-semibold focus:ring hover:ring focus:ring-opacity-75 bg-gray-900 text-white inline-flex items-center gap-2">
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRight className="size-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
