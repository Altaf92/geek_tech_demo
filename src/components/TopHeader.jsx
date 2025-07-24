'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const TopHeader = () => {
    return (
        <div>
            <div className="top-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-6 col-sm-6 col-md-3 col-lg-4 text-left">
                            <i className="icon anm anm-phone-l me-2"></i><Link href="tel:401234567890">(+40) 123 456 7890</Link>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 text-center d-none d-md-block">
                            Free shipping on all orders <Link href="products" className="text-link ms-1">Shop now</Link>
                        </div>
                        <div className="col-6 col-sm-6 col-md-3 col-lg-4 text-right d-flex align-items-center justify-content-end">
                            <div className="select-wrap language-picker float-start">
                                <ul className="default-option">
                                    <li>
                                        <div className="option english">
                                            <div className="icon">
                                                <Image src="/assets/images/flag/english.png" alt="english" width="24" height="24" />
                                            </div>
                                            <span>English</span>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="select-ul">
                                    <li>
                                        <div className="option english">
                                            <div className="icon">
                                            <Image src="/assets/images/flag/english.png" alt="english" width="24" height="24" /></div>
                                            <span>English</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="option arabic">
                                            <div className="icon">
                                            <Image src="/assets/images/flag/arabic.png" alt="arabic" width="24" height="24" /></div>
                                            <span>Arabic</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="option english">
                                            <div className="icon">
                                            <Image src="/assets/images/flag/french.png" alt="french" width="24" height="24" /></div>
                                            <span>French</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="select-wrap currency-picker float-start">
                                <ul className="default-option">
                                    <li>
                                        <div className="option USD">
                                            <div className="icon">
                                            <Image src="/assets/images/flag/usd.png" alt="usd" width="24" height="24" /></div>
                                            <span>USD</span>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="select-ul">
                                    <li>
                                        <div className="option USD">
                                            <div className="icon">
                                            <Image src="/assets/images/flag/usd.png" alt="usd" width="24" height="24" /></div>
                                            <span>USD</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="option EUR">
                                            <div className="icon">
                                            <Image src="/assets/images/flag/eur.png" alt="eur" width="24" height="24" /></div>
                                            <span>EUR</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="option GBP">
                                            <div className="icon">
                                            <Image src="/assets/images/flag/gbp.png" alt="gbp" width="24" height="24" /></div>
                                            <span>GBP</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader
