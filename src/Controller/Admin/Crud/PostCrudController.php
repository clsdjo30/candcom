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
            TextField::new('title'),
            TextField::new('shortDescription'),
            TextEditorField::new('content')->hideOnIndex(),
            DateField::new('createdAt')->hideOnForm(),
            CollectionField::new('tags')
                ->allowAdd()
                ->useEntryCrudForm(TagCrudController::class)
                ->setEntryIsComplex(false),
            ImageField::new('postImage')

                ->setUploadDir('public/uploads/images/')
                ->setBasePath('public/uploads/images/'),
            TextField::new('altImage'),
            BooleanField::new('isAhead'),
            BooleanField::new('IsAside')
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
