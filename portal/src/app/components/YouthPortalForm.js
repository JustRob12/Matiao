"use client";

import React, { useState } from 'react';
import styles from './YouthPortalForm.module.css';

const puroks = ['Pagasa', 'Pagasa 2', 'Mangga'];

export default function YouthPortalForm() {
  const [profileImage, setProfileImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [form, setForm] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    religion: '',
    civilStatus: '',
    age: '',
    dob: '',
    motherName: '',
    motherWork: '',
    motherContact: '',
    fatherName: '',
    fatherWork: '',
    fatherContact: '',
    guardianName: '',
    guardianWork: '',
    guardianContact: '',
    contact: '',
    email: '',
    hobbies: '',
    remarks: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    setProfileImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    // Here you would handle form submission, e.g., send to backend
    setTimeout(() => setSubmitted(false), 2000);
  }

  return (
    <>
      <div className="youth-portal-header">
        <h2 className="youth-portal-title"> Matiao Youth Portal Registration</h2>
      </div>
      <form className={styles.youthPortalForm} onSubmit={handleSubmit}>
        {/* Row 1: Names */}
        <div className={`${styles.formRow} ${styles.threeCols}`}>
          <div className={styles.formGroup}>
            <label>First Name</label>
            <input type="text" name="firstName" value={form.firstName} onChange={handleInputChange} required />
          </div>
          <div className={styles.formGroup}>
            <label>Middle Name</label>
            <input type="text" name="middleName" value={form.middleName} onChange={handleInputChange} />
          </div>
          <div className={styles.formGroup}>
            <label>Last Name</label>
            <input type="text" name="lastName" value={form.lastName} onChange={handleInputChange} required />
          </div>
        </div>
        {/* Row 2: Religion, Status, Age, DOB */}
        <div className={`${styles.formRow} ${styles.fourCols}`}>
          <div className={styles.formGroup}>
            <label>Religion</label>
            <input type="text" name="religion" value={form.religion} onChange={handleInputChange} />
          </div>
          <div className={styles.formGroup}>
            <label>Civil Status</label>
            <select name="civilStatus" value={form.civilStatus} onChange={handleInputChange}>
              <option value="">Select Status</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>Age</label>
            <input type="number" name="age" value={form.age} onChange={handleInputChange} min="1" max="100" />
          </div>
          <div className={styles.formGroup}>
            <label>Date of Birth</label>
            <input type="date" name="dob" value={form.dob} onChange={handleInputChange} required />
          </div>
        </div>
         {/* Row 3: Contact info */}
         <div className={`${styles.formRow} ${styles.twoCols}`}>
          <div className={styles.formGroup}>
            <label>Contact Number</label>
            <input type="tel" name="contact" value={form.contact} onChange={handleInputChange} required />
          </div>
          <div className={styles.formGroup}>
            <label>Email</label>
            <input type="email" name="email" value={form.email} onChange={handleInputChange} required />
          </div>
        </div>
        {/* Row 4: Mother info */}
        <div className={`${styles.formRow} ${styles.threeCols}`}>
          <div className={styles.formGroup}>
            <label>Mother Complete Name</label>
            <input type="text" name="motherName" value={form.motherName} onChange={handleInputChange} />
          </div>
          <div className={styles.formGroup}>
            <label>Mother Work</label>
            <input type="text" name="motherWork" value={form.motherWork} onChange={handleInputChange} />
          </div>
          <div className={styles.formGroup}>
            <label>Mother Contact Number</label>
            <input type="tel" name="motherContact" value={form.motherContact} onChange={handleInputChange} />
          </div>
        </div>
        {/* Row 5: Father info */}
        <div className={`${styles.formRow} ${styles.threeCols}`}>
          <div className={styles.formGroup}>
            <label>Father Complete Name</label>
            <input type="text" name="fatherName" value={form.fatherName} onChange={handleInputChange} />
          </div>
          <div className={styles.formGroup}>
            <label>Father Work</label>
            <input type="text" name="fatherWork" value={form.fatherWork} onChange={handleInputChange} />
          </div>
          <div className={styles.formGroup}>
            <label>Father Contact Number</label>
            <input type="tel" name="fatherContact" value={form.fatherContact} onChange={handleInputChange} />
          </div>
        </div>
        {/* Row 6: Guardian info */}
        <div className={`${styles.formRow} ${styles.threeCols}`}>
          <div className={styles.formGroup}>
            <label>Guardian Complete Name</label>
            <input type="text" name="guardianName" value={form.guardianName} onChange={handleInputChange} />
          </div>
          <div className={styles.formGroup}>
            <label>Guardian Work</label>
            <input type="text" name="guardianWork" value={form.guardianWork} onChange={handleInputChange} />
          </div>
          <div className={styles.formGroup}>
            <label>Guardian Contact Number</label>
            <input type="tel" name="guardianContact" value={form.guardianContact} onChange={handleInputChange} />
          </div>
        </div>
       
        {/* Row 7: Profile Image */}
        <div className={styles.formRow}>
          <div className={styles.imagePickerGroup}>
            <label htmlFor="profileImage">Profile Image</label>
            <input type="file" id="profileImage" accept="image/*" onChange={handleImageChange} />
            {preview && <img src={preview} alt="Profile Preview" className={styles.profilePreview} />}
          </div>
        </div>
        {/* Row 8: Hobbies/Remarks */}
        <div className={styles.formRow}>
          <div className={`${styles.formGroup} ${styles.formGroupTextarea}`}>
            <label>Hobbies/Interests</label>
            <textarea name="hobbies" value={form.hobbies} onChange={handleInputChange} rows={2} />
          </div>
          <div className={`${styles.formGroup} ${styles.formGroupTextarea}`}>
            <label>Remarks/Notes</label>
            <textarea name="remarks" value={form.remarks} onChange={handleInputChange} rows={2} />
          </div>
        </div>
        <button type="submit" className="youth-portal-submit" disabled={submitted}>
          {submitted ? 'Registering...' : 'Register'}
        </button>
        {submitted && (
          <div className="form-success-message">Registration submitted! (Demo only)</div>
        )}
      </form>
    </>
  );
}
