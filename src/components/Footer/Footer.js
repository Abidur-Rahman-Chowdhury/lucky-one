import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="question-container">
      <h2>How React Works?</h2>
      <p>
        Answer: রিয়েক্ট হলো একটি ফ্রন্ট এন্ড লাইব্রেরি । রিয়েক্ট কম্পোনেন্ট বেইজ
        এবং একমুখী ডাটা প্রবাহের মাধ্যমে কাজ করে। রিয়েক্ট এর ডাটা ফ্লো এক মুখী।
        প্যারেন্ট কম্পোনেন্ট থেকে চাইল্ড কম্পোনেন্ট এ ডাটা পাস করা হয়। এ ছাড়াও
        রিয়েক্ট এ রয়েছে ভার্চুয়াল ডম যার মাধ্যমে কোন চেইঞ্জ আসলে খুব দ্রুত
        আইডেন্টি ফাই করতে পারে এবং পুরা ডকুমেন্টকে রি-রেন্ডার না করে শুধু মাত্র
        যেখানে চেইঞ্জ হয়েছে সেই জায়গায় রেন্ডার করে। এর ফলে ওয়েব সাইট এর পারফর্মেন্স খুব বেড়ে যায় এবং ওয়েবসাইট খুব দ্রুত লোড হয়।
      </p>
      <br />
      <h2>Difference between Props Vs State</h2>
      <p>
        Answer: <strong>Props:</strong> 1.Props are read only. <br />
        2.Props can not be modified. <br />
        <strong>State:</strong> 1. State changes can be synchronous. <br />
        2.State can be modified using this.setState.
          </p> <br />
          <h2>How useState work</h2>
          <p>Answer: useState রিয়েক্ট এর একটা হুক যা ফাংশনাল কম্পোনেন্ট এর মধ্যে  state variable  কে রাখতে দেই। useState এক ধরনের ফাংশন যা ২ টা মান গ্রহন করে থাকে। প্রথমটি হলো ইনিশিয়াল ভ্যালু এবং ২য় টি হলো একটা ফাংশন। যখন স্টেইট এর মধ্যে কোন চেইঞ্জ আসে এই ফাংশনটির কাজ হলো দ্রুত ইনিশিয়াল ভেলুকে রিপ্লেস করে নতুন ভ্যালুকে আপডেট করে দেওয়া। এই মান হতে পারে কখনো কোন সংখ্যা আবার কখনো এরে আকারেও স্টেইটকে আপডেট করে। </p>
    </div>
  );
};

export default Footer;
