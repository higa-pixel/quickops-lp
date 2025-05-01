// app/contact/page.js
"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ContactForm() {
  const router = useRouter();
  const [contact, setContact] = useState({
    company: '',        // 会社名（必須）
    department: '',     // 部署名（任意）
    name: '',           // 氏名（必須）
    email: '',          // メールアドレス（必須）
    inquiry_type: '',   // お問い合わせの種類（必須）
    message: '',        // 自由記述欄（必須）
    honeypot: '',       // スパム対策用の隠しフィールド
    subject: 'QuickOpsお問い合わせ', // メールの件名
    replyTo: '@',       // 自動返信の設定
    accessKey: process.env.NEXT_PUBLIC_STATIC_FORMS_ACCESS_KEY, // Static Formsのアクセスキー
  });
  
  // プライバシーポリシー同意チェック
  const [policyAgreed, setPolicyAgreed] = useState(false);
  
  const [response, setResponse] = useState({
    type: '',
    message: '',
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = e => 
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    
    // プライバシーポリシーに同意していない場合は送信しない
    if (!policyAgreed) {
      setResponse({
        type: 'error',
        message: 'プライバシーポリシーに同意してください。',
      });
      return;
    }
    
    setLoading(true);
    
    try {
      const res = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: { 'Content-Type': 'application/json' },
      });
      
      const json = await res.json();
      
      if (json.success) {
        // 成功したらサンクスページに遷移
        router.push('/contact/thanks');
      } else {
        setResponse({
          type: 'error',
          message: json.message,
        });
      }
    } catch (e) {
      console.log('An error occurred', e);
      setResponse({
        type: 'error',
        message: 'エラーが発生しました。しばらくしてからお試しください。',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">お問い合わせ</h1>
      
      {response.message && (
        <div className={`p-4 mb-6 rounded ${response.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {response.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
        {/* 会社名（必須） */}
        <div className="mb-6">
          <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
            会社名 <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={contact.company}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        {/* 部署名（任意） */}
        <div className="mb-6">
          <label htmlFor="department" className="block text-gray-700 font-medium mb-2">
            部署名
          </label>
          <input
            type="text"
            id="department"
            name="department"
            value={contact.department}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        {/* 氏名（必須） */}
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            氏名 <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={contact.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        {/* メールアドレス（必須） */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            メールアドレス <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        {/* お問い合わせの種類（必須） */}
        <div className="mb-6">
          <label htmlFor="inquiry_type" className="block text-gray-700 font-medium mb-2">
            お問い合わせの種類 <span className="text-red-600">*</span>
          </label>
          <select
            id="inquiry_type"
            name="inquiry_type"
            value={contact.inquiry_type}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">選択してください</option>
            <option value="freeconsultation">無料相談について</option>
            <option value="service-price">サービス・料金について</option>
            <option value="document">資料請求</option>
            <option value="other">その他</option>
          </select>
        </div>
        
        {/* ハニーポットフィールド - スパム対策のための隠しフィールド */}
        <input
          type="text"
          name="honeypot"
          value={contact.honeypot}
          onChange={handleChange}
          style={{ display: 'none' }}
        />
        
        {/* 自由記述欄（必須） */}
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
            お問い合わせ内容 <span className="text-red-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={contact.message}
            onChange={handleChange}
            rows="6"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        
        {/* プライバシーポリシー同意チェックボックス */}
        <div className="mb-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="policy_agreement"
              checked={policyAgreed}
              onChange={() => setPolicyAgreed(!policyAgreed)}
              className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="policy_agreement" className="ml-2 block text-gray-700">
              <Link href="/policy" className="text-blue-600 hover:underline">プライバシーポリシー</Link>に同意します <span className="text-red-600">*</span>
            </label>
          </div>
        </div>
        
        <div className="text-center">
          <button
            type="submit"
            disabled={loading || !policyAgreed}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? '送信中...' : '送信する'}
          </button>
        </div>
      </form>
    </div>
  );
}