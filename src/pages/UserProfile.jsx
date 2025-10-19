import React, { useState } from 'react'

const UserProfile = () => {
  // JSON dataset for user data
  const [userData, setUserData] = useState({
    name: "Helen",
    email: "alexarawles@gmail.com",
    fullName: "Helen Johnson",
    gender: "female",
    language: "english",
    password: "123335",
    country: "us",
    timeZone: "est",
    emailAddedDate: "1 month ago"
  })

  // State for edit mode
  const [isEditing, setIsEditing] = useState(false)
  const [editedData, setEditedData] = useState(userData)
  
  // State for password change
  const [showPasswordChange, setShowPasswordChange] = useState(false)
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  // Handle edit button click
  const handleEdit = () => {
    setEditedData(userData)
    setIsEditing(true)
  }

  // Handle cancel button click
  const handleCancel = () => {
    setEditedData(userData)
    setIsEditing(false)
  }

  // Handle save button click
  const handleSave = () => {
    setUserData(editedData)
    setIsEditing(false)
  }

  // Handle input changes
  const handleInputChange = (field, value) => {
    setEditedData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  // Handle password change
  const handlePasswordChange = () => {
    if (newPassword === confirmPassword && newPassword.length > 0) {
      setUserData(prev => ({
        ...prev,
        password: newPassword
      }))
      setNewPassword('')
      setConfirmPassword('')
      setShowPasswordChange(false)
      alert('Password updated successfully!')
    } else {
      alert('Passwords do not match or are empty!')
    }
  }

  // Handle cancel password change
  const handleCancelPasswordChange = () => {
    setNewPassword('')
    setConfirmPassword('')
    setShowPasswordChange(false)
  }

  return (
    <div className="min-h-screen bg-white px-52 pt-32">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          {/* Profile Picture */}
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img 
              src="./assets/profileImage.png" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* User Info */}
          <div>
            <h1 className="text-2xl font-bold" style={{color: '#1A1A1A'}}>{userData.name}</h1>
            <p style={{color: '#808080'}}>{userData.email}</p>
          </div>
        </div>
        {/* Action Buttons */}
        <div className="flex space-x-3">
          {isEditing ? (
            <>
              <button 
                onClick={handleCancel}
                className="bg-gray-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleSave}
                className="text-white px-6 py-2 rounded-lg font-medium hover:opacity-80 transition-colors"
                style={{backgroundColor: '#388E3C'}}
              >
                Save
              </button>
            </>
          ) : (
              <button 
                onClick={handleEdit}
                className="text-white px-6 py-2 rounded-lg font-medium hover:opacity-80 transition-colors"
                style={{backgroundColor: '#17550B'}}
              >
              Edit
            </button>
          )}
        </div>
      </div>

      {/* Form Section - Two Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block font-medium mb-2" style={{color: '#1A1A1A'}}>Full Name</label>
            {isEditing ? (
              <input 
                type="text" 
                value={editedData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                style={{backgroundColor: '#F5F5F5', color: '#1A1A1A'}}
              />
            ) : (
              <div className="w-full py-2 text-lg" style={{color: '#1A1A1A'}}>
                {userData.fullName}
              </div>
            )}
          </div>
          
          {/* Gender */}
          <div>
            <label className="block font-medium mb-2" style={{color: '#1A1A1A'}}>Gender</label>
            {isEditing ? (
              <div className="relative">
                <select 
                  value={editedData.gender}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none"
                  style={{backgroundColor: '#F5F5F5', color: '#1A1A1A'}}
                >
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="lgbtq">LGBTQ+</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#1A1A1A'}}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            ) : (
              <div className="w-full py-2 text-lg capitalize" style={{color: '#1A1A1A'}}>
                {userData.gender}
              </div>
            )}
          </div>
          
          {/* Language */}
          <div>
            <label className="block font-medium mb-2" style={{color: '#1A1A1A'}}>Language</label>
            {isEditing ? (
              <div className="relative">
                <select 
                  value={editedData.language}
                  onChange={(e) => handleInputChange('language', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none"
                  style={{backgroundColor: '#F5F5F5', color: '#1A1A1A'}}
                >
                  <option value="english">English</option>
                  <option value="myanmar">Myanmar</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#1A1A1A'}}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            ) : (
              <div className="w-full py-2 text-lg capitalize" style={{color: '#1A1A1A'}}>
                {userData.language}
              </div>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Password */}
          <div>
            <label className="block font-medium mb-2" style={{color: '#1A1A1A'}}>Password</label>
            <div className="flex items-center justify-between">
              <div className="py-2 text-lg" style={{color: '#1A1A1A'}}>
                ••••••••
              </div>
              <button 
                onClick={() => setShowPasswordChange(true)}
                className="px-4 py-2 bg-[#17550B] text-white rounded-lg hover:opacity-80 transition-colors text-sm"
              >
                Change Password
              </button>
            </div>
          </div>
          
          {/* Current Country */}
          <div>
            <label className="block font-medium mb-2" style={{color: '#1A1A1A'}}>Current Country</label>
            {isEditing ? (
              <div className="relative">
                <select 
                  value={editedData.country}
                  onChange={(e) => handleInputChange('country', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none"
                  style={{backgroundColor: '#F5F5F5', color: '#1A1A1A'}}
                >
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                  <option value="au">Australia</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#1A1A1A'}}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            ) : (
              <div className="w-full py-2 text-lg" style={{color: '#1A1A1A'}}>
                {userData.country === 'us' && 'United States'}
                {userData.country === 'uk' && 'United Kingdom'}
                {userData.country === 'ca' && 'Canada'}
                {userData.country === 'au' && 'Australia'}
              </div>
            )}
          </div>
          
          {/* Time Zone */}
          <div>
            <label className="block font-medium mb-2" style={{color: '#1A1A1A'}}>Time Zone</label>
            {isEditing ? (
              <div className="relative">
                <select 
                  value={editedData.timeZone}
                  onChange={(e) => handleInputChange('timeZone', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none"
                  style={{backgroundColor: '#F5F5F5', color: '#1A1A1A'}}
                >
                  <option value="gmt">GMT+0</option>
                  <option value="est">GMT-5 (EST)</option>
                  <option value="pst">GMT-8 (PST)</option>
                  <option value="cet">GMT+1 (CET)</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#1A1A1A'}}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            ) : (
              <div className="w-full py-2 text-lg" style={{color: '#1A1A1A'}}>
                {userData.timeZone === 'gmt' && 'GMT+0'}
                {userData.timeZone === 'est' && 'GMT-5 (EST)'}
                {userData.timeZone === 'pst' && 'GMT-8 (PST)'}
                {userData.timeZone === 'cet' && 'GMT+1 (CET)'}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Email Addresses Section */}
      <div className="border-t border-gray-200 pt-8">
        <h2 className="text-xl font-bold mb-6" style={{color: '#1A1A1A'}}>My email Address</h2>
        
        {/* Primary Email */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100">
            <img src="/assets/sms.svg" alt="email icon" className="w-5 h-5" />
          </div>
          <div>
            <p className="font-medium" style={{color: '#1A1A1A'}}>{userData.email}</p>
            <p className="text-sm" style={{color: '#808080'}}>{userData.emailAddedDate}</p>
          </div>
        </div>
        
        {/* Add Email Button */}
        <button className="px-6 py-3 rounded-lg font-medium hover:opacity-80 transition-colors flex items-center space-x-2" style={{backgroundColor: '#F9F9F9', color: '#17550B'}}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span>Add Email Address</span>
        </button>
      </div>

      {/* Password Change Modal */}
      {showPasswordChange && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 w-full max-w-md mx-4 rounded-lg">
            {/* Header */}
            <h2 className="text-2xl font-bold mb-2" style={{color: '#1A1A1A'}}>Create new password</h2>
            <p className="text-sm mb-8" style={{color: '#808080'}}>Your new password must be unique from those previously used</p>
            
            {/* New Password Field */}
            <div className="mb-6">
              <label className="block font-bold mb-3 text-base" style={{color: '#1A1A1A'}}>New Password</label>
              <div className="relative">
                <input 
                  type={showNewPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-base"
                  style={{backgroundColor: '#FFFFFF'}}
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  style={{color: '#808080'}}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {showNewPassword ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="mb-8">
              <label className="block font-bold mb-3 text-base" style={{color: '#1A1A1A'}}>Confirm Password</label>
              <div className="relative">
                <input 
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Enter your confirm password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-base"
                  style={{backgroundColor: '#FFFFFF'}}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  style={{color: '#808080'}}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {showConfirmPassword ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Reset Password Button */}
            <div className="text-center">
              <button
                onClick={handlePasswordChange}
                className="w-full px-8 py-4 text-white rounded-lg hover:opacity-80 transition-colors font-bold text-lg"
                style={{backgroundColor: '#345813'}}
              >
                Reset Password
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserProfile