<?php

namespace App\Controller;

use App\Entity\Post;
use App\Repository\PostRepository;
use App\Repository\TagRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/blog')]
class BlogController extends AbstractController
{
    #[Route('/', name: 'blog')]
    public function index(
        PostRepository $postRepository,
        TagRepository $tag,
        PaginatorInterface $paginator,
        Request $request
    ): Response
    {
        $data = $postRepository->findAll();

        $posts = $paginator->paginate(
            $data,
            $request->query->getInt('page', 1),
            5
        );

        return $this->render('blog/index.html.twig', [
            'posts' => $posts,
            'lasts' => $postRepository->findByCreatedAt(),
            'tags' => $tag->findAll()
        ]);
    }

    #[Route('/{slug}', name: 'post_details', methods: ['GET'])]
    public function showAnnounceDetails(
        Post $post,
        TagRepository $tags,
        PostRepository $postRepository
    ): Response {
        return $this->render('blog/show_post_details.html.twig', [
            'post' => $post,
            'lasts' => $postRepository->findByCreatedAt(),
            'tags' => $tags->findAll()
        ]);
    }



}
