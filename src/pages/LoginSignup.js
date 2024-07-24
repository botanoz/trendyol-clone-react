import React, { useState } from 'react';
import { Eye, EyeOff, Facebook, Mail } from 'lucide-react';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="w-full max-w-md bg-white justify-center items-center mx-auto mt-4">
      <h2 className="text-2xl font-bold text-center mb-2">Merhaba,</h2>
      <p className="text-center text-gray-600 mb-6">
        Trendyol'a giriş yap veya hesap oluştur, indirimleri kaçırma!
      </p>
      
      <div className="flex mb-6 border-b">
        <button
          className={`flex-1 py-2 ${isLogin ? 'border-b-2 border-orange-500 font-semibold text-orange-500' : ''}`}
          onClick={() => setIsLogin(true)}
        >
          Giriş Yap
        </button>
        <button
          className={`flex-1 py-2 ${!isLogin ? 'border-b-2 border-orange-500 font-semibold text-orange-500' : ''}`}
          onClick={() => setIsLogin(false)}
        >
          Üye Ol
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4 relative">
          <input
            type="email"
            placeholder="E-Posta"
            className="w-full px-3 py-2 border border-gray-300 rounded-md pl-10"
            required
          />
          <Mail className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        
        <div className="mb-4 relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Şifre"
            className="w-full px-3 py-2 border border-gray-300 rounded-md pr-10"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2.5 text-gray-400"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {isLogin && (
          <button className="text-sm text-orange-500 hover:underline mb-4">
            Şifremi Unuttum
          </button>
        )}

        {!isLogin && (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cinsiyet (Opsiyonel)
              </label>
              <div className="flex">
                <button type="button" className="flex-1 py-2 border border-gray-300 rounded-l-md">
                  Kadın
                </button>
                <button type="button" className="flex-1 py-2 border border-gray-300 rounded-r-md">
                  Erkek
                </button>
              </div>
            </div>

            {['avantajlı teklifler', 'elektronik ileti', 'aydınlatma metni'].map((text, index) => (
              <div key={index} className="mb-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-xs text-gray-600">
                    {text === 'avantajlı teklifler'
                      ? 'Tarafıma avantajlı tekliflerin sunulabilmesi amacıyla kişisel verilerimin işlenmesine ve paylaşılmasına açık rıza veriyorum.'
                      : text === 'elektronik ileti'
                      ? 'Tarafıma elektronik ileti gönderilmesini kabul ediyorum.'
                      : 'Kişisel verilerimin işlenmesine yönelik aydınlatma metnini okudum ve anladım.'}
                  </span>
                </label>
              </div>
            ))}
          </>
        )}

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300 mb-4"
        >
          {isLogin ? 'GİRİŞ YAP' : 'ÜYE OL'}
        </button>
      </form>

      <div className="flex justify-between mb-4">
        <button className="flex items-center justify-center w-[48%] bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
          <Facebook size={20} className="mr-2" />
          Facebook ile {isLogin ? 'giriş yap' : 'kayıt ol'}
        </button>
        <button className="flex items-center justify-center w-[48%] bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition duration-300">
          <Mail size={20} className="mr-2" />
          Google ile {isLogin ? 'giriş yap' : 'kayıt ol'}
        </button>
      </div>

      <button className="text-xs text-center text-blue-600 hover:underline w-full">
        Üye olmadan verilen siparişlerin takibi için tıklayınız
      </button>
    </div>
  );
};

export default LoginSignup;