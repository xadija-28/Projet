<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class XadijaController extends AbstractController
{
    #[Route('/xadija', name: 'app_xadija')]
    public function index(): Response
    {
        return $this->render('xadija/index.html.twig', [
            'controller_name' => 'XadijaController',
        ]);
    }
}
