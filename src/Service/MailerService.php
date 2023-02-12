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
        $to = 'to@example.com ',
        $subject = 'This is the Mail subject !',
        $content = '',
        $text = ''
    ): void{
        $email = (new Email())
            ->from('noreply@mysite.com')
            ->to($to)
            ->subject($subject)
            ->text($text)
            ->html($content);
        $this->mailer->send($email);
    }
}