"use client"
import Body from '@/components/Body';

import React, { useEffect } from 'react';


export default function InstaEmbed() {
  return (
    <Body>
        <div className="flex flex-wrap  relative z-10 gap-5 justify-center items-center p-5" >
                <div><InstagramPost postUrl="https://www.instagram.com/p/C_VSglWzLcx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" /></div>
    
                <div><InstagramPost postUrl="https://www.instagram.com/p/C_LIjWsIdTA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" /></div>
    
                <div><InstagramPost postUrl="https://www.instagram.com/p/C_AxTxbO_ab/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" /></div>
        </div>
    </Body>
  )
}




function InstagramPost  ({ postUrl  }){
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <blockquote
      className="instagram-media"
      
      data-instgrm-permalink={postUrl}
      data-instgrm-version="14"
      style={{
        background: '#FFF',
        border: '0',
        borderRadius: '3px',
        boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
        margin: '1px',
        maxWidth: '300px',
        minWidth: '300px',
        padding: '0',
        width: '300px',
       
      }}
    >
      <div style={{ padding: '16px' }}>
        <a
          href={postUrl}
          style={{
            background: '#FFFFFF',
            lineHeight: '0',
            padding: '0 0',
            textAlign: 'center',
            textDecoration: 'none',
            width: '100%',
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Content of the Instagram post */}
          {/* You can keep the content as it is in the original embed code */}
        </a>
      </div>
    </blockquote>
  );
};


