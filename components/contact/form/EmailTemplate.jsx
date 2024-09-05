import { H1, Paragraph } from '@/components/typography/Typography';
import * as React from 'react';



export const EmailTemplate = ({
    name = "test", email = "test@email.in", mobile = 12345678909, message  = "test message"
}) => (
  <div>
    <H1>New Contact Form Submission</H1>
    <Paragraph>Name: {name}</Paragraph>
    <Paragraph>Email: {email}</Paragraph>
    <Paragraph>Mobile: {mobile}</Paragraph>
    <Paragraph>Message: {message}</Paragraph>
  </div>
);
