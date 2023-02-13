<?php

namespace App\Service;

use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;

class MailerService
{
    private  MailerInterface $mailer;

    /**
     * @param $mailer
     */
    public function __construct (MailerInterface$mailer)
    {
        $this->mailer =  $mailer;
    }


    /**
     * @throws TransportExceptionInterface
     */
    public function sendEmail(
        $to = 'contact@candcom.com',
        $subject = 'This is the Mail subject !',
        $content = '',
        $text = ''
    ): void{
        $email = (new Email())
            ->from('contact@c-and-com.studio')
            ->to($to)
            ->subject($subject)
            ->text($text)
            ->html($content);
        $this->mailer->send($email);
    }
}