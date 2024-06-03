'use client'

import React, { useEffect, useState } from 'react';
import { Noto_Nastaliq_Urdu } from 'next/font/google'

const notoNastaliqUrdu = Noto_Nastaliq_Urdu({
    weight: ["400", '500', '600', "700"],
    subsets: ["latin", "arabic"],
});


function Banner() {

    const [open, setOpen] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpen(true);
        }, 1000);

        // Cleanup function
        return () => clearTimeout(timer);
    }, [])

    return (
        <div className={`fixed top-0 w-screen h-screen ${open ? 'flex' : "hidden"} justify-center items-center bg-black bg-opacity-60 backdrop-blur-sm z-50`}>
            <div className='bg-white rounded-lg p-5 md:p-8 !pt-16 w-[95%] md:w-[600px] max-h-[95vh] overflow-y-auto relative'>
                <span onClick={() => setOpen(false)} className='absolute top-5 right-5 cursor-pointer text-xl font-semibold w-[25px] h-[25px] flex justify-center items-center bg-red-400 rounded-full'>x</span>
                <p className={`text-lg text-right leading-loose ${notoNastaliqUrdu.className}`}>پیارے طالب علم،

                    گورنر سندھ آئی ٹی انیشی ایٹو میں آپ کی گہری دلچسپی اور بھروسے کا تعلق برقرار رکھنے کے لیے تہے دل سے مشکور ہیں۔ گورنر سندھ جناب کامران ٹیسوری آپ کے بہترین مستقبل اور پاکستان کو اگے بڑھانے کے لئے ہر ممکن کوشاں ہیں

                    گورنر  سندھ 4 جون 2024 بروز منگل دوپہر   3:00 بجے حیدرآباد پریٹ اباد
                    ہوم اسٹیٹ ہال (حسرت موہانی لائبریری ) نزد ایم کیو ایم ڈسٹرکٹ آفس کا دورہ کریں گے۔

                    گورنر صاحب حیدرآباد کے طلبہ کے لیے اہم اعلان کریں گے۔ آپ شرکت کو یقینی بنائیں-

                    گورنر سندھ جناب کامران ٹسوری کی دلی نیک تمنائیں آپ سب کے ساتھ ہیں

                    <br />شکریہ</p>
            </div>
        </div>
    );
}

export default Banner;