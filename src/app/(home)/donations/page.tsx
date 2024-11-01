'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Heart, Tv, Vote, Star, Coffee, Rocket } from 'lucide-react';

const tiers = [
  {
    name: 'Coffee Supporter',
    icon: Coffee,
    price: '$5',
    description: 'Fuel my creativity with a coffee!',
    perks: ['Name on the donors list', 'My eternal gratitude'],
  },
  {
    name: 'Super Fan',
    icon: Star,
    price: '$10',
    description: 'Unlock exclusive content and more as a super fan!',
    perks: [
      'All previous perks',
      'Monthly behind-the-scenes content',
      'Vote on future projects',
    ],
  },
  {
    name: 'Rocket Booster',
    icon: Rocket,
    price: '$25',
    description: 'Propel my projects to new heights!',
    perks: [
      'All previous perks',
      'Your name in the credits',
      'Quarterly video call',
    ],
  },
];

const animeOptions = [
  'One Piece',
  'My Hero Academia',
  'Demon Slayer',
  'Attack on Titan',
  'Jujutsu Kaisen',
];

export default function DonatePage() {
  const [selectedTier, setSelectedTier] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [selectedAnime, setSelectedAnime] = useState<string | null>(null);

  const handleDonate = () => {
    console.log('Donation amount:', selectedTier || customAmount);
    console.log('Voted for anime:', selectedAnime);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted dark:from-background dark:to-background/80 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <Heart className="mx-auto h-12 w-12 text-primary" />
        <h2 className="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl">
          Support My Work on Patreon
        </h2>
        <p className="mt-4 text-xl text-muted-foreground">
          Your support helps me create more amazing content and bring new
          ideas to life. Join my Patreon community and get exclusive perks!
        </p>
      </div>

      <div className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">
        {tiers.map((tier) => (
          <Card
            key={tier.name}
            className="flex flex-col justify-between border-primary/10 dark:border-primary/20 hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader>
              <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary/10 text-primary mb-4">
                <tier.icon className="h-6 w-6" />
              </div>
              <CardTitle className="text-lg">{tier.name}</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">
                {tier.price}
                <span className="text-sm font-normal text-muted-foreground">
                  /month
                </span>
              </p>
              <ul className="mt-4 space-y-2">
                {tier.perks.map((perk, index) => (
                  <li key={index} className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-2" />
                    <span className="text-sm text-muted-foreground">
                      {perk}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                Select
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Card className="mt-12 max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Choose Your Donation</CardTitle>
          <CardDescription>
            Select an amount or enter a custom donation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mt-4">
            <Label htmlFor="custom-amount">Custom Amount</Label>
            <Input
              id="custom-amount"
              placeholder="Enter amount"
              type="number"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setSelectedTier(null);
              }}
            />
          </div>
          <div className="mt-6">
            <Label htmlFor="anime-vote">Vote for Next Anime</Label>
            <RadioGroup onValueChange={setSelectedAnime} className="mt-2">
              {animeOptions.map((anime) => (
                <div key={anime} className="flex items-center space-x-2">
                  <RadioGroupItem value={anime} id={anime} />
                  <Label htmlFor={anime}>{anime}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleDonate} className="w-full">
            Donate and Vote
          </Button>
        </CardFooter>
      </Card>
      <div className="mt-12 text-center">
        <div className="flex justify-center space-x-4">
          <div className="flex items-center">
            <Tv className="h-5 w-5 text-primary mr-2" />
            <span className="text-sm text-muted-foreground">
              Support Anime
            </span>
          </div>
          <div className="flex items-center">
            <Vote className="h-5 w-5 text-primary mr-2" />
            <span className="text-sm text-muted-foreground">
              Vote for Next Anime
            </span>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Your support helps us continue to provide free anime content to
          everyone!
        </p>
      </div>
    </div>
  );
}
