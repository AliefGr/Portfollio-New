import React from 'react'

const Footer = () => {
    const legalLinks = [
    'Terms of Service',
    'Privacy Policy',
    'Cookie Settings',
    'Accessibility',
];
  return (
    <div className='bg-background text-foreground relative w-full pt-2 pb-2'>
            <div className="border-foreground/10 flex flex-col items-center justify-center border-t pt-8 md:flex-row">
                <p className="text-foreground/60 mb-4 text-sm md:mb-0">
                    © 2025 Acme Inc. All rights reserved.
                </p>
                {/* <div className="flex flex-wrap justify-center gap-6">
                    {legalLinks.map((text) => (
                    <a
                        key={text}
                        href="#"
                        className="text-foreground/60 hover:text-foreground text-sm"
                    >
                        {text}
                    </a>
                    ))}
                </div> */}
             </div>
    </div>
  )
}

export default Footer