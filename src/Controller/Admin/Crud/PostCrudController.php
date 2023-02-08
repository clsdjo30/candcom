<?php

namespace App\Controller\Admin\Crud;

use App\Entity\Post;
use App\Entity\Tag;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\CollectionField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class PostCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Post::class;
    }
    public function configureFields(string $pageName): iterable
    {
        $config = array('toolbar' => 'full');

        return [
            IdField::new('id')->hideOnForm()->hideOnDetail()->hideOnIndex(),
            TextField::new('title')
                ->setLabel("Titre de l'article")
                ->setColumns(6),
            BooleanField::new('isAhead')
                ->setColumns(3)
                ->setLabel("Acceuil - Articles mise en avant"),
            BooleanField::new('IsAside')
                ->setColumns(3)
                ->setLabel("Acceuil - Articles secondaire "),
            TextField::new('shortDescription')
                ->setLabel("Resumé de l'article"),
            ImageField::new('postImage')
                ->setLabel("Bannière de l'article")
                ->setColumns(6)
                ->setUploadDir('public/uploads/images/')
                ->setBasePath('public/uploads/images/'),
            TextField::new('altImage')
                ->setLabel("SEO - Description de la bannière")
                ->setColumns(6),
            TextEditorField::new('content')->hideOnIndex()
                ->setColumns(12)
                ->setLabel("Contenu de l'article")
                ->setTrixEditorConfig([
                    'blockAttributes' => [
                        'default' => ['tagName' => 'p'],
                        'heading1' => ['tagName' => 'h2'],
                    ],
                    'data-trix-attachment' => true
                ]),
            DateField::new('createdAt')->hideOnForm(),
            CollectionField::new('tags')
                ->allowAdd()
                ->setLabel("TAGS")
                ->useEntryCrudForm(TagCrudController::class)
                ->setEntryIsComplex(false),
        ];
    }

    public function persistEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        if(!$entityInstance instanceof Post) {
            return;
        }

        $entityInstance->setCreatedAt(new DateTime());

        $this->addFlash('success', 'Votre articles a bien été ajouté !');

        parent::persistEntity($entityManager, $entityInstance);
    }
}
