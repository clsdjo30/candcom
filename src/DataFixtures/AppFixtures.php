<?php

namespace App\DataFixtures;

use App\Entity\Post;
use App\Entity\Tag;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\String\Slugger\SluggerInterface;

class AppFixtures extends Fixture
{
    /**
     * Encodeur de mot de passe
     *
     * @var UserPasswordHasherInterface
     */
    private UserPasswordHasherInterface $encoder;

    public function __construct(
        UserPasswordHasherInterface $encoder,

    ) {
        $this->encoder = $encoder;
    }
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create('fr_FR');

        $admin = (new User())
            ->setEmail('admin@test.com')
            ->setRoles(['ROLE_ADMIN']);
        $admin->setPassword($this->encoder->hashPassword($admin, 'password'));
        $manager->persist($admin);

        $tags =[];
        //ON genere des tags
        $tagsValue = array("PHP", "BackEnd", "Frontend", "Tailwind", "Htmx", "Symfony", "Api-Platform");

        foreach ($tagsValue as $tagValue) {
            $tag = new Tag();
            $tag->setName($tagValue);
            $manager->persist($tag);
            $tags[] = $tag;
        }

        for ($i=0; $i < 10; $i++) {
            $post = new Post();
            $post->setTitle($faker->realTextBetween(15,25))
                ->setShortDescription($faker->realTextBetween(160, 260))
                ->setContent($faker->text())
                ->setCreatedAt($faker->dateTime())
                ->setPostImage($faker->imageUrl(640, 480, 'animals', true))
                ->setIsAhead(false)
                ->setSlug($post->getTitle())
                ->addTag($faker->randomElement($tags));

            $manager->persist($post);
        }

        $manager->flush();
    }
}

