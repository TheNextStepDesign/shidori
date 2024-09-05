import { EmailTemplate } from '@/components/contact/form/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend("re_a8S6hBgq_4hpwoqYQfiEFuumLcGzYUFoH");

export async function POST(request) {
    const { name, email, mobile, message } = await request.json();
    console.log(name, email, mobile, message, 'req.body');
    
    if (!"re_a8S6hBgq_4hpwoqYQfiEFuumLcGzYUFoH") {
        return NextResponse.json({ error: 'Resend API key is missing' }, { status: 500 });
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'shidori <contact@shidori.in>',
            to: ['info@shidori.in'],
            subject: 'New Contact Form Submission',
            react: EmailTemplate({ name, email, mobile, message }),
        });

        if (error) {
            console.error('Resend API Error:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Unexpected Error:', error);
        return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
    }
}