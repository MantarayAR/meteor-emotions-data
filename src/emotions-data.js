if ( Meteor.isServer ) {
  this.emotions = {};
  this.emotions.data = [
    {
      slug : 'bad',
      readible : 'Bad',
      parent : null,
      tier : 0
    },
    {
      slug : 'bored',
      readible : 'Bored',
      parent : 'bad',
      tier : 1
    },
    {
      slug : 'indifferent',
      readible : 'Indifferent',
      parent : 'bored',
      tier : 2
    },
    {
      slug : 'apathetic',
      readible : 'Apathetic',
      parent : 'bored',
      tier : 2
    },
    {
      slug : 'busy',
      readible : 'Busy',
      parent : 'bad',
      tier : 1
    },
    {
      slug : 'pressured',
      readible : 'Pressured',
      parent : 'busy',
      tier : 2
    },
    {
      slug : 'rushed',
      readible : 'Rushed',
      parent : 'busy',
      tier : 2
    },
    {
      slug : 'stressed',
      readible : 'Stressed',
      parent : 'bad',
      tier : 1,
    },
    {
      slug : 'overwhelmed',
      readible : 'Overwhelmed',
      parent : 'stressed',
      tier : 2
    },
    {
      slug : 'out-of-control',
      readible : 'Out of Control',
      parent : 'stressed',
      tier : 2
    },
    {
      slug : 'tired',
      readible : 'Tired',
      parent : 'bad',
      tier : 1
    },
    {
      slug : 'sleepy',
      readible : 'Sleepy',
      parent : 'tired',
      tier : 2
    },
    {
      slug : 'unfocused',
      readible : 'Unfocused',
      parent : 'tired',
      tier : 2
    },
    {
      slug : 'surprised',
      readible : 'Surprised',
      parent : null,
      tier : 0
    },
    {
      slug : 'startled',
      readible : 'Startled',
      parent : 'surprised',
      tier : 1
    },
    {
      slug : 'shocked',
      readible : 'Shocked',
      parent : 'startled',
      tier : 2
    },
    {
      slug : 'dismayed',
      readible : 'Dismayed',
      parent : 'startled',
      tier : 2
    },
    {
      slug : 'confused',
      readible : 'Confused',
      parent : 'surprised',
      tier : 1
    },
    {
      slug : 'disillusioned',
      readible : 'Disillusioned',
      parent : 'confused',
      tier : 2
    },
    {
      slug : 'perplexed',
      readible : 'Perplexed',
      parent : 'confused',
      tier : 2
    },
    {
      slug : 'amazed',
      readible : 'Amazed',
      parent : 'surprised',
      tier : 1
    },
    {
      slug : 'astonished',
      readible : 'Astonished',
      parent : 'amazed',
      tier : 2
    },
    {
      slug : 'awe',
      readible : 'Awe',
      parent : 'amazed',
      tier : 2
    },
    {
      slug : 'excited',
      readible : 'Excited',
      parent : 'surprised',
      tier : 1
    },
    {
      slug : 'eager',
      readible : 'Eager',
      parent : 'excited',
      tier : 2
    },
    {
      slug : 'energetic',
      readible : 'Energetic',
      parent : 'excited',
      tier : 2
    },
    {
      slug : 'happy',
      readible : 'Happy',
      parent : null,
      tier : 0
    },
    {
      slug : 'playful',
      readible : 'Playful',
      parent : 'happy',
      tier : 1
    },
    {
      slug : 'aroused',
      readible : 'Aroused',
      parent : 'playful',
      tier : 2
    }, {
      slug : 'cheeky',
      readible : 'Cheeky',
      parent : 'playful',
      tier : 2
    },
    {
      slug : 'content',
      readible : 'Content',
      parent : 'happy',
      tier : 1
    },
    {
      slug : 'free',
      readible : 'Free',
      parent : 'content',
      tier : 2
    },
    {
      slug : 'joyful',
      readible : 'Joyful',
      parent : 'content',
      tier : 2
    },
    {
      slug : 'interested',
      readible : 'Interested',
      parent : 'happy',
      tier : 1
    },
    {
      slug : 'curious',
      readible : 'Curious',
      parent : 'interested',
      tier : 2
    },
    {
      slug : 'inquisitive',
      readible : 'Inquisitive',
      parent : 'interested',
      tier : 2
    },
    {
      slug : 'proud',
      readible : 'Proud',
      parent : 'happy',
      tier : 1
    },
    {
      slug : 'successful',
      readible : 'Successful',
      parent : 'proud',
      tier : 2
    },
    {
      slug : 'confident',
      readible : 'Condfident',
      parent : 'proud',
      tier : 2
    },
    {
      slug : 'accepted',
      readible : 'Accepted',
      parent : 'happy',
      tier : 1
    },
    {
      slug : 'respected',
      readible : 'Respected',
      parent : 'accepted',
      tier : 2
    },
    {
      slug : 'valued',
      readible : 'Valued',
      parent : 'accepted',
      tier : 2
    },
    {
      slug : 'powerful',
      readible : 'Powerful',
      parent : 'happy',
      tier : 1
    },
    {
      slug : 'courageous',
      readible : 'Courageous',
      parent : 'powerful',
      tier : 2
    },
    {
      slug : 'creative',
      readible : 'Creative',
      parent : 'powerful',
      tier : 2
    },
    {
      slug : 'peaceful',
      readible : 'Peaceful',
      parent : 'happy',
      tier : 1
    },
    {
      slug : 'loving',
      readible : 'Loving',
      parent : 'peaceful',
      tier : 2
    },
    {
      slug : 'thankful',
      readible : 'Thankful',
      parent : 'peaceful',
      tier : 2
    },
    {
      slug : 'trusting',
      readible : 'Trusting',
      parent : 'happy',
      tier : 1
    },
    {
      slug : 'sensitive',
      readible : 'Sensitive',
      parent : 'trusting',
      tier : 2
    },
    {
      slug : 'intimate',
      readible : 'Intimate',
      parent : 'trusting',
      tier : 2
    },
    {
      slug : 'optimistic',
      readible : 'Optimistic',
      parent : 'happy',
      tier : 1
    },
    {
      slug : 'hopeful',
      readible : 'Hopeful',
      parent : 'optimistic',
      tier : 2
    },
    {
      slug : 'inspired',
      readible : 'Inspired',
      parent : 'optimistic',
      tier : 2
    },
    {
      slug : 'sad',
      readible : 'Sad',
      parent : null,
      tier : 0
    },
    {
      slug : 'lonely',
      readible : 'Lonely',
      parent : 'sad',
      tier : 1
    },
    {
      slug : 'isolated',
      readible : 'Isolated',
      parent : 'lonely',
      tier : 2
    },
    {
      slug : 'abandoned',
      readible : 'Abandoned',
      parent : 'lonely',
      tier : 2
    },
    {
      slug : 'vulnerable',
      readible : 'Vulnerable',
      parent : 'sad',
      tier : 1
    },
    {
      slug : 'victimised',
      readible : 'Victimised',
      parent : 'vulnerable',
      tier : 2
    },
    {
      slug : 'fragile',
      readible : 'Fragile',
      parent : 'vulnerable',
      tier : 2
    },
    {
      slug : 'despair',
      readible : 'Despair',
      parent : 'sad',
      tier : 1
    },
    {
      slug : 'grief',
      readible : 'Grief',
      parent : 'despair',
      tier : 2
    },
    {
      slug : 'powerless',
      readible : 'Powerless',
      parent : 'despair',
      tier : 2
    },
    {
      slug : 'guilty',
      readible : 'Guilty',
      parent : 'sad',
      tier : 1
    },
    {
      slug : 'remorseful',
      readible : 'Remorseful',
      parent : 'guilty',
      tier : 2
    },
    {
      slug : 'ashamed',
      readible : 'Ashamed',
      parent : 'guilty',
      tier : 2
    },
    {
      slug : 'depressed',
      readible : 'Depressed',
      parent : 'sad',
      tier : 1
    },
    {
      slug : 'empty',
      readible : 'Empty',
      parent : 'depressed',
      tier : 2
    },
    {
      slug : 'inferior',
      readible : 'Inferior',
      parent : 'depressed',
      tier : 2
    },
    {
      slug : 'hurt',
      readible : 'Hurt',
      parent : 'sad',
      tier : 1
    },
    {
      slug : 'dissapointed',
      readible : 'Dissapointed',
      parent : 'hurt',
      tier : 2
    },
    {
      slug : 'embarrassed',
      readible : 'Embarrassed',
      parent : 'hurt',
      tier : 2
    },
    {
      slug : 'disgusted',
      readible : 'Disgusted',
      parent : null,
      tier : 0
    },
    {
      slug : 'repelled',
      readible : 'Repelled',
      parent : 'disgusted',
      tier : 1
    },
    {
      slug : 'hesitant',
      readible : 'Hesitant',
      parent : 'repelled',
      tier : 2
    },
    {
      slug : 'horrified',
      readible : 'Horrified',
      parent : 'repelled',
      tier : 2
    },
    {
      slug : 'awful',
      readible : 'Awful',
      parent : 'disgusted',
      tier : 1
    },
    {
      slug : 'detestable',
      readible : 'Detestable',
      parent : 'awful',
      tier : 2
    },
    {
      slug : 'nauseated',
      readible : 'Nauseated',
      parent : 'awful',
      tier : 2
    },
    {
      slug : 'disappointed',
      readible : 'Disappointed',
      parent : 'disgusted',
      tier : 1
    },
    {
      slug : 'revolted',
      readible : 'Revolted',
      parent : 'disappointed',
      tier : 2
    },
    {
      slug : 'appalled',
      readible : 'Appalled',
      parent : 'disappointed',
      tier : 2
    },
    {
      slug : 'dissaproving',
      readible : 'Dissaproving',
      parent : 'disgusted',
      tier : 1
    },
    {
      slug : 'embarrassed',
      readible : 'Embarrassed',
      parent : 'dissaproving',
      tier : 2
    },
    {
      slug : 'judgmental',
      readible : 'Judgmental',
      parent : 'dissaproving',
      tier : 2
    },
    {
      slug : 'angry',
      readible : 'Angry',
      parent : null,
      tier : 0
    },
    {
      slug : 'critical',
      readible : 'Critical',
      parent : 'angry',
      tier : 1
    },
    {
      slug : 'dismissive',
      readible : 'Dismissive',
      parent : 'critical',
      tier : 2
    },
    {
      slug : 'sceptical',
      readible : 'Sceptical',
      parent : 'critical',
      tier : 2
    },
    {
      slug : 'distant',
      readible : 'Distant',
      parent : 'angry',
      tier : 1
    },
    {
      slug : 'numb',
      readible : 'Numb',
      parent : 'distant',
      tier : 2
    },
    {
      slug : 'withdrawn',
      readible : 'Withdrawn',
      parent : 'distant',
      tier : 2
    },
    {
      slug : 'frustrated',
      readible : 'Frustrated',
      parent : 'angry',
      tier : 1
    },
    {
      slug : 'annoyed',
      readible : 'Annoyed',
      parent : 'frustrated',
      tier : 2
    },
    {
      slug : 'infuriated',
      readible : 'Infuriated',
      parent : 'frustrated',
      tier : 2
    },
    {
      slug : 'aggressive',
      readible : 'Aggressive',
      parent : 'angry',
      tier : 1
    },
    {
      slug : 'hostile',
      readible : 'Hostile',
      parent : 'aggressive',
      tier : 2
    },
    {
      slug : 'provoked',
      readible : 'Provoked',
      parent : 'aggressive',
      tier : 2
    },
    {
      slug : 'mad',
      readible : 'Mad',
      parent : 'angry',
      tier : 1
    },
    {
      slug : 'jealous',
      readible : 'Jealous',
      parent : 'mad',
      tier : 2
    },
    {
      slug : 'furious',
      readible : 'Furious',
      parent : 'mad',
      tier : 2
    },
    {
      slug : 'bitter',
      readible : 'Bitter',
      parent : 'angry',
      tier : 1
    },
    {
      slug : 'violated',
      readible : 'Violated',
      parent : 'bitter',
      tier : 2
    },
    {
      slug : 'indignant',
      readible : 'Indignant',
      parent : 'bitter',
      tier : 2
    },
    {
      slug : 'humiliated',
      readible : 'Humiliated',
      parent : 'angry',
      tier : 1
    },
    {
      slug : 'ridiculed',
      readible : 'Ridiculed',
      parent : 'humiliated',
      tier : 2
    },
    {
      slug : 'disrespected',
      readible : 'Disrespected',
      parent : 'humiliated',
      tier : 2
    },
    {
      slug : 'let-down',
      readible : 'Let Down',
      parent : 'angry',
      tier : 1
    },
    {
      slug : 'betrayed',
      readible : 'Betrayed',
      parent : 'let-down',
      tier : 2
    },
    {
      slug : 'resentful',
      readible : 'Resenful',
      parent : 'let-down',
      tier : 2
    },
    {
      slug : 'fearful',
      readible : 'Fearful',
      parent : null,
      tier : 0
    },
    {
      slug : 'threatened',
      readible : 'Threatened',
      parent : 'fearful',
      tier : 1
    },
    {
      slug : 'exposed',
      readible : 'Exposed',
      parent : 'threatened',
      tier : 2
    },
    {
      slug : 'nervous',
      readible : 'Nervous',
      parent : 'threatened',
      tier : 2
    },
    {
      slug : 'rejected',
      readible : 'Rejected',
      parent : 'fearful',
      tier : 1
    },
    {
      slug : 'persecuted',
      readible : 'Persecuted',
      parent : 'rejected',
      tier : 2
    },
    {
      slug : 'excluded',
      readible : 'Excluded',
      parent : 'rejected',
      tier : 2
    },
    {
      slug : 'weak',
      readible : 'Weak',
      parent : 'fearful',
      tier : 1
    },
    {
      slug : 'insignificant',
      readible : 'Insignificant',
      parent : 'weak',
      tier : 2
    },
    {
      slug : 'worthless',
      readible : 'Worthless',
      parent : 'weak',
      tier : 2
    },
    {
      slug : 'insecure',
      readible : 'Insecure',
      parent : 'fearful',
      tier : 1
    },
    {
      slug : 'inferior',
      readible : 'Inferior',
      parent : 'insecure',
      tier : 2
    },
    {
      slug : 'inadequate',
      readible : 'Inadequate',
      parent : 'insecure',
      tier : 2
    },
    {
      slug : 'anxious',
      readible : 'Anxious',
      parent : 'fearful',
      tier : 1
    },
    {
      slug : 'overwhelmed',
      readible : 'Overwhelmed',
      parent : 'anxious',
      tier : 2
    },
    {
      slug : 'worried',
      readible : 'Worried',
      parent : 'anxious',
      tier : 2
    },
    {
      slug : 'scared',
      readible : 'Scared',
      parent : 'fearful',
      tier : 1
    },
    {
      slug : 'helpless',
      readible : 'Helpless',
      parent : 'scared',
      tier : 2
    },
    {
      slug : 'frightened',
      readible : 'Frightened',
      parent : 'scared',
      tier : 2
    }
  ];
}