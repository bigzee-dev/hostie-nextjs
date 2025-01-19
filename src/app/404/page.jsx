import Link from 'next/link'
import React from 'react'

function ErrorPage() {
    return (
        <div>
            <div className="rts-error-section">
                <div className="section-inner">
                    <img src="assets/images/error.png" alt="" />
                    <div className="wrapper-para mt--45">
                        <h3 className="title">Page Not Found</h3>
                        <p className="disc">
                            We're sorry, the page you requested could not be found <br /> please go
                            back to the homepage
                        </p>
                        <Link href="/" className="rts-btn btn__long btn-primary m-auto">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ErrorPage