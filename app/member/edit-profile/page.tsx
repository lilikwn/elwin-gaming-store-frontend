import InputText from '@/components/atoms/Input/InputText'
import Sidebar from '@/components/organism/Sidebar/Sidebar'
import Image from 'next/image'
import React from 'react'

function EditProfile() {
  return (
    // <!-- Transactions Detail -->
    <section className="edit-profile overflow-auto">
        <Sidebar />
        <main className="main-wrapper">
            <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
                <div className="bg-card pt-30 ps-30 pe-30 pb-30">
                    <form action="">
                        <div className="photo d-flex">
                            <div className="position-relative me-20">
                                <Image alt="Avatar" src="/assets/img/avatar-1.png" width="90" height="90" className="avatar img-fluid" />
                                <div
                                    className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center">
                                    <Image src="/assets/icon/trash-icon.svg" width={30} height={30} alt='delete avatar' />
                                </div>
                            </div>
                            <div className="image-upload">
                                <label htmlFor='avatar' >
                                    <Image src="/assets/icon/upload-icon.svg" alt='upload Avatar' width={90} height={90} />
                                </label>
                                <input id="avatar" type="file" name="avatar" accept="image/png, image/jpeg" />
                            </div>
                        </div>
                        <InputText label='Full Name' placeholder="Enter your name" name="name" />
                        <InputText label='Email Address' placeholder="Enter your Email" name="email"/>
                        <InputText label='Phone' placeholder="Enter your Phone Number" name="phone"/>
                    </form>

                </div>
            </div>
        </main>
    </section>
  )
}

export default EditProfile