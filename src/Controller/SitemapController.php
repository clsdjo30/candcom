<?php

namespace App\Controller;

use App\Entity\Post;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SitemapController extends AbstractController
{
    /**
     * @Route("sitemap.xml", name="sitemap", defaults={"_format"="xml"})
     * @param Request $request
     * @param EntityManagerInterface $manager
     * @return Response
     */
    public function index(Request $request, EntityManagerInterface $manager)
    {
        // Nous récupérons le nom d'hôte depuis l'URL
        $hostname = $request->getSchemeAndHttpHost();

        // On initialise un tableau pour lister les URLs
        $urls = [];

        // On ajoute les URLs "statiques"
        $urls[] = ['loc' => $this->generateUrl('main')];
        $urls[] = ['loc' => $this->generateUrl('privacy-policy')];
        $urls[] = ['loc' => $this->generateUrl('legal')];
        $urls[] = ['loc' => $this->generateUrl('blog')];

        // On ajoute les URLs dynamiques des articles dans le tableau
        foreach ($manager->getRepository(Post::class)
            ->findAll() as $article) {
            $images = [
                'loc' => '/uploads/images/'.$article->getPostImage(), // URL to image
                'title' => $article->getAltImage()  // Optional, text describing the image
            ];

            $urls[] = [
                'loc' => $this->generateUrl('post_details', [
                    'slug' => $article->getSlug(),
                ]),
                'lastmod' => $article->getUpdatedAt()->format('Y-m-d'),
                'image' => $images
            ];
        }

        // Fabrication de la réponse XML
        $response = new Response(
            $this->renderView('sitemap/index.html.twig', ['urls' => $urls,
                'hostname' => $hostname]),
            200
        );

// Ajout des entêtes
        $response->headers->set('Content-Type', 'text/xml');

// On envoie la réponse
        return $response;


    }
}
