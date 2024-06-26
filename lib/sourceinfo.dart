import 'package:flutter/material.dart';

class PlanetInfo {
  final int position;
  final String name;
  final String description;
  final List<String> images;
  final List<String> videoUrls; 
  final IconData icon;
  final String iconimage;


  PlanetInfo(
    this.position, {
    required this.name,
    required this.description,
    required this.images,
    required this.videoUrls,
    required this.icon,
    required this.iconimage,
  });
}

List<PlanetInfo> secondaryplanetInfo = [
PlanetInfo(1,
      name: 'Introduction',
      icon: Icons.question_mark,
      description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat metus ipsum. Proin iaculis, diam nec dignissim egestas, eros lacus fermentum mi, id sodales massa quam non lectus. Quisque quis egestas ligula. Integer fringilla quis nulla nec vulputate. Aliquam vitae urna eget nisl varius viverra. Sed vel rutrum tellus. Praesent ac urna et ipsum euismod consectetur.",
      images: [
        'https://fakeimg.pl/600x400?text=VIDEO+1',
        'https://fakeimg.pl/600x400?text=VIDEO+2',
      ],
      videoUrls: [
        'https://res.cloudinary.com/dtlly4vrq/video/upload/f_auto:video,q_auto/v1/closedloop/cpucygayg2gjnfmychuj',
        'https://res.cloudinary.com/dtlly4vrq/video/upload/f_auto:video,q_auto/v1/closedloop/ca4y8q6bjguu1trg77n8',
      ],
      iconimage: "assets/questionmark.png",
      ),
      PlanetInfo(2,
      name: 'Cardiac Arrest',
      icon: Icons.question_mark,
      description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat metus ipsum. Proin iaculis, diam nec dignissim egestas, eros lacus fermentum mi, id sodales massa quam non lectus. Quisque quis egestas ligula. Integer fringilla quis nulla nec vulputate. Aliquam vitae urna eget nisl varius viverra. Sed vel rutrum tellus. Praesent ac urna et ipsum euismod consectetur.",
      images: [
        'https://fakeimg.pl/600x400?text=VIDEO+1',
        'https://fakeimg.pl/600x400?text=VIDEO+2',
      ],videoUrls: [
        'https://res.cloudinary.com/dtlly4vrq/video/upload/f_auto:video,q_auto/v1/closedloop/cpucygayg2gjnfmychuj',
        'https://res.cloudinary.com/dtlly4vrq/video/upload/f_auto:video,q_auto/v1/closedloop/ca4y8q6bjguu1trg77n8',
      ],iconimage: "assets/questionmark.png",),
      PlanetInfo(3,
      name: 'Surgical Procedures',
      icon: Icons.question_mark,
      iconimage: "assets/questionmark.png",
      description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat metus ipsum. Proin iaculis, diam nec dignissim egestas, eros lacus fermentum mi, id sodales massa quam non lectus. Quisque quis egestas ligula. Integer fringilla quis nulla nec vulputate. Aliquam vitae urna eget nisl varius viverra. Sed vel rutrum tellus. Praesent ac urna et ipsum euismod consectetur.",
      images: [
        'https://fakeimg.pl/600x400?text=VIDEO+1',
        'https://fakeimg.pl/600x400?text=VIDEO+2',
      ],videoUrls: [
        'https://res.cloudinary.com/dtlly4vrq/video/upload/f_auto:video,q_auto/v1/closedloop/cpucygayg2gjnfmychuj',
        'https://res.cloudinary.com/dtlly4vrq/video/upload/f_auto:video,q_auto/v1/closedloop/ca4y8q6bjguu1trg77n8',
      ],),
];

List<PlanetInfo> planetInfo = [
  PlanetInfo(1,
      name: 'Allergy checks',
      iconimage: "assets/allergychecks.png",
      icon: Icons.medication,videoUrls: [
        'https://res.cloudinary.com/dtlly4vrq/video/upload/f_auto:video,q_auto/v1/closedloop/cpucygayg2gjnfmychuj',
        'https://res.cloudinary.com/dtlly4vrq/video/upload/f_auto:video,q_auto/v1/closedloop/ca4y8q6bjguu1trg77n8',
      ],
      description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat metus ipsum. Proin iaculis, diam nec dignissim egestas, eros lacus fermentum mi, id sodales massa quam non lectus. Quisque quis egestas ligula. Integer fringilla quis nulla nec vulputate. Aliquam vitae urna eget nisl varius viverra. Sed vel rutrum tellus. Praesent ac urna et ipsum euismod consectetur.",
      images: [
        'https://fakeimg.pl/600x400?text=VIDEO+1',
        'https://fakeimg.pl/600x400?text=VIDEO+2',
      ]),
  PlanetInfo(2,
      name: 'Asthma Confirm',
      iconimage: "assets/inhaler.png",
      icon: Icons.masks,videoUrls: [
        'https://res.cloudinary.com/dtlly4vrq/video/upload/f_auto:video,q_auto/v1/closedloop/cpucygayg2gjnfmychuj',
        'https://res.cloudinary.com/dtlly4vrq/video/upload/f_auto:video,q_auto/v1/closedloop/ca4y8q6bjguu1trg77n8',
      ],
      description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat metus ipsum. Proin iaculis, diam nec dignissim egestas, eros lacus fermentum mi, id sodales massa quam non lectus. Quisque quis egestas ligula. Integer fringilla quis nulla nec vulputate. Aliquam vitae urna eget nisl varius viverra. Sed vel rutrum tellus. Praesent ac urna et ipsum euismod consectetur.",
      images: [
        'https://fakeimg.pl/600x400?text=VIDEO+1',
        'https://fakeimg.pl/600x400?text=VIDEO+2',
      ]),
  PlanetInfo(3,
      name: 'Item 3',
      icon: Icons.question_mark,
      iconimage: "assets/questionmark.png",videoUrls: [
        'https://res.cloudinary.com/dtlly4vrq/video/upload/f_auto:video,q_auto/v1/closedloop/cpucygayg2gjnfmychuj',
        'https://res.cloudinary.com/dtlly4vrq/video/upload/f_auto:video,q_auto/v1/closedloop/ca4y8q6bjguu1trg77n8',
      ],
      description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat metus ipsum. Proin iaculis, diam nec dignissim egestas, eros lacus fermentum mi, id sodales massa quam non lectus. Quisque quis egestas ligula. Integer fringilla quis nulla nec vulputate. Aliquam vitae urna eget nisl varius viverra. Sed vel rutrum tellus. Praesent ac urna et ipsum euismod consectetur.",
      images: [
        'https://fakeimg.pl/600x400?text=VIDEO+1',
        'https://fakeimg.pl/600x400?text=VIDEO+2',
      ]),
  PlanetInfo(4,
      name: 'Item 4',
      icon: Icons.question_mark,videoUrls: [
        'https://res.cloudinary.com/dtlly4vrq/video/upload/f_auto:video,q_auto/v1/closedloop/cpucygayg2gjnfmychuj',
        'https://res.cloudinary.com/dtlly4vrq/video/upload/f_auto:video,q_auto/v1/closedloop/ca4y8q6bjguu1trg77n8',
      ],
      iconimage: "assets/questionmark.png",
      description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat metus ipsum. Proin iaculis, diam nec dignissim egestas, eros lacus fermentum mi, id sodales massa quam non lectus. Quisque quis egestas ligula. Integer fringilla quis nulla nec vulputate. Aliquam vitae urna eget nisl varius viverra. Sed vel rutrum tellus. Praesent ac urna et ipsum euismod consectetur.",
      images: [
        'https://fakeimg.pl/600x400?text=VIDEO+1',
        'https://fakeimg.pl/600x400?text=VIDEO+2',
      ]),
];
