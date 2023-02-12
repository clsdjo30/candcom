<?php

namespace App\Controller;

use App\Entity\Contact;
use App\Form\ContactType;
use App\Repository\PostRepository;
use App\Service\MailerService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class MainController extends AbstractController
{
    /**
     * @throws TransportExceptionInterface
     */
    #[Route('/', name: 'main')]
    public function index(
        PostRepository     $postRepository,
        Request            $request,
        MailerService      $mailer,
    EntityManagerInterface $manager
    ): Response
    {
        $posts = $postRepository->findAll();

        $form = $this->createForm(ContactType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            // On recupere les données du formulaire
            $contactFormData = $form->getData();

             // On injecte les données du formulaire dans le Mailer Service
            $subject = 'Demande de contact sur votre site de ' . $contactFormData->getEmail();
            $content = $contactFormData->getName() . ' vous a envoyé le message suivant: ' . $contactFormData->getMessage();

            // On envoi le formulaire par mail
            $mailer->sendEmail(subject: $subject, content: $content);

            //On sauvegarde les données en BDD
            $manager->persist($contactFormData);
            $manager->flush();

            $this->addFlash('success', 'Votre message a bien été envoyé, nous le traiterons dans les meilleurs délais !');

            return $this->redirectToRoute('main');
        }

        return $this->render('main/index.html.twig', [
            'posts' => $posts,
            'form' => $form->createView()


        ]);
    }


}
