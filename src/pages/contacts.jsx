import React from 'react'
import s from '../components/contacts/contacts.module.scss'
import ContactInfo from '../components/contacts/ContactInfo'

export default function Contacts() {
  
  return (
    <div className={s.contacts_page}>
      <h3 className={s.contacts_page_heading}>Контакты</h3>
      <ContactInfo />
    </div>
  )
}
