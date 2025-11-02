import React from 'react'

const ChangePassword = () => {
  return (
    <div className="min-h-screen bg-white px-52 pt-32">
        <h1 className="text-2xl font-bold" style={{color: '#1A1A1A'}}>Create new password</h1>
        <p className='text-black'>Your new password must be unique from those previously used</p>
        <form action="" className='my-10 w-2/3'>
            <label htmlFor="password" className='font-bold'>New Password</label>
            <input type="password" name="password" id="password" className='w-full px-4 py-3 border border-gray-200 rounded-lg ring-1 ring-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent mb-4' placeholder='Enter password' />
            <label htmlFor="repassword" className='font-bold'>Confirm Password</label>
            <input type="password" name="repassword" id="repassword" className='w-full px-4 py-3 border border-gray-200 rounded-lg ring-1 ring-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent mb-4' placeholder='Enter your confirm password' />
            
            <div className="text-center mt-8">
              <button
                type="submit"
                className="w-full px-8 py-3 text-white rounded-lg hover:opacity-80 transition-colors font-bold text-lg"
                style={{backgroundColor: '#345813'}}
              >
                Reset Password
              </button>
            </div>
            </form>
    </div>
  )
}

export default ChangePassword