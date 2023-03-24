import React from 'react'
import {FaTwitterSquare, FaTelegram} from 'react-icons/fa'
export const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="row">
                <div className="col">
                    <span><FaTwitterSquare /></span>
                    <span><FaTelegram /></span>
                </div>
                <div className="col">
                    <span>© 2023  Dash Finance</span>
                </div>
            </div>
        </div>
    </footer>
  )
}
