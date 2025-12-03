import { Hymn, Language, AppTab } from './types';

export const LOGO_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Coat_of_arms_of_the_Diocese_of_Simla_Chandigarh.png/480px-Coat_of_arms_of_the_Diocese_of_Simla_Chandigarh.png"; 

export const APP_NAME = "Simla Chandigarh Diocese";

// Date constraints
export const DATE_MIN = "2025-12-01";
export const DATE_MAX = "2026-12-21";

export const UI_TEXT = {
  [Language.ENGLISH]: {
    [AppTab.READINGS]: "Readings",
    [AppTab.REFLECTION]: "Reflection",
    [AppTab.SAINT]: "Saint",
    [AppTab.HYMNS]: "Hymns",
    loading: "Loading daily spiritual nourishment...",
    selectLanguage: "Language",
    selectDate: "Select Date",
    hymnSearch: "Search hymns...",
    backToHymns: "Back",
    firstReading: "First Reading",
    psalm: "Responsorial Psalm",
    gospel: "Gospel",
    saintOfTheDay: "Saint of the Day",
    reflectionTitle: "Daily Reflection",
    filterByCategory: "Filter",
    allCategories: "All",
  },
  [Language.HINDI]: {
    [AppTab.READINGS]: "दैनिक पाठ",
    [AppTab.REFLECTION]: "चिंतन",
    [AppTab.SAINT]: "आज के संत",
    [AppTab.HYMNS]: "भजन",
    loading: "दैनिक आध्यात्मिक सामग्री लोड हो रही है...",
    selectLanguage: "भाषा",
    selectDate: "दिनांक चुनें",
    hymnSearch: "भजन खोजें...",
    backToHymns: "वापस",
    firstReading: "पहला पाठ",
    psalm: "भजन संहिता",
    gospel: "सुसमाचार",
    saintOfTheDay: "आज के संत",
    reflectionTitle: "दैनिक चिंतन",
    filterByCategory: "श्रेणी",
    allCategories: "सभी",
  },
  [Language.PUNJABI]: {
    [AppTab.READINGS]: "ਪਾਠ",
    [AppTab.REFLECTION]: "ਵਿਚਾਰ",
    [AppTab.SAINT]: "ਅੱਜ ਦੇ ਸੰਤ",
    [AppTab.HYMNS]: "ਗੀਤ",
    loading: "ਰੋਜ਼ਾਨਾ ਅਧਿਆਤਮਿਕ ਸਮੱਗਰੀ ਲੋਡ ਹੋ ਰਹੀ ਹੈ...",
    selectLanguage: "ਭਾਸ਼ਾ",
    selectDate: "ਮਿਤੀ ਚੁਣੋ",
    hymnSearch: "ਗੀਤ ਖੋਜੋ...",
    backToHymns: "ਵਾਪਸ",
    firstReading: "ਪਹਿਲਾ ਪਾਠ",
    psalm: "ਜ਼ਬੂਰ",
    gospel: "ਇੰਜੀਲ",
    saintOfTheDay: "ਅੱਜ ਦੇ ਸੰਤ",
    reflectionTitle: "ਰੋਜ਼ਾਨਾ ਵਿਚਾਰ",
    filterByCategory: "ਸ਼੍ਰੇਣੀ",
    allCategories: "ਸਭ",
  }
};

export const HYMNS_DATA: Hymn[] = [
  // --- ENGLISH (Joyful Lips Collection) ---
  {
    id: 'e1',
    title: 'All to Jesus I Surrender',
    language: 'English',
    category: 'Offertory',
    lyrics: `All to Jesus I surrender,
All to Him I freely give;
I will ever love and trust Him,
In His presence daily live.

Refrain:
I surrender all,
I surrender all;
All to Thee, my blessed Savior,
I surrender all.

All to Jesus I surrender,
Humbly at His feet I bow,
Worldly pleasures all forsaken;
Take me, Jesus, take me now.`
  },
  {
    id: 'e2',
    title: 'Amazing Grace',
    language: 'English',
    category: 'General',
    lyrics: `Amazing grace! How sweet the sound
That saved a wretch like me!
I once was lost, but now am found;
Was blind, but now I see.

'Twas grace that taught my heart to fear,
And grace my fears relieved;
How precious did that grace appear
The hour I first believed.`
  },
  {
    id: 'e3',
    title: 'Here I Am, Lord',
    language: 'English',
    category: 'Entrance',
    lyrics: `I, the Lord of sea and sky,
I have heard my people cry.
All who dwell in dark and sin
My hand will save.

Refrain:
Here I am, Lord. Is it I, Lord?
I have heard you calling in the night.
I will go, Lord, if you lead me.
I will hold your people in my heart.

I, who made the stars of night,
I will make their darkness bright.
Who will bear my light to them?
Whom shall I send?`
  },
  {
    id: 'e4',
    title: 'Abide With Me',
    language: 'English',
    category: 'Recessional',
    lyrics: `Abide with me, fast falls the eventide
The darkness deepens Lord, with me abide
When other helpers fail and comforts flee
Help of the helpless, oh, abide with me.

Swift to its close ebbs out life's little day;
Earth's joys grow dim; its glories pass away;
Change and decay in all around I see;
O Thou who changest not, abide with me.`
  },
  {
    id: 'e5',
    title: 'Come, Holy Ghost, Creator Blest',
    language: 'English',
    category: 'Entrance',
    lyrics: `Come, Holy Ghost, Creator blest,
And in our hearts take up Thy rest;
Come with Thy grace and heavenly aid
To fill the hearts which Thou hast made.

O comforter, to Thee we cry,
Thou heavenly gift of God most high,
Thou fount of life and fire of love,
And sweet anointing from above.`
  },
  {
    id: 'e6',
    title: 'As the Deer Pants for the Water',
    language: 'English',
    category: 'Communion',
    lyrics: `As the deer pants for the water
So my soul longs after You
You alone are my heart's desire
And I long to worship You

Refrain:
You alone are my strength, my shield
To You alone may my spirit yield
You alone are my heart's desire
And I long to worship You`
  },
  {
    id: 'e7',
    title: 'Great is Thy Faithfulness',
    language: 'English',
    category: 'General',
    lyrics: `Great is Thy faithfulness, O God my Father;
There is no shadow of turning with Thee;
Thou changest not, Thy compassions, they fail not;
As Thou hast been Thou forever wilt be.

Refrain:
Great is Thy faithfulness!
Great is Thy faithfulness!
Morning by morning new mercies I see:
All I have needed Thy hand hath provided—
Great is Thy faithfulness, Lord, unto me!`
  },
  {
    id: 'e8',
    title: 'Make Me a Channel of Your Peace',
    language: 'English',
    category: 'Recessional',
    lyrics: `Make me a channel of your peace.
Where there is hatred, let me bring your love.
Where there is injury, your pardon, Lord,
And where there's doubt, true faith in you.

Oh, Master, grant that I may never seek
So much to be consoled as to console.
To be understood as to understand,
To be loved as to love with all my soul.`
  },
  {
    id: 'e9',
    title: 'O Sacrament Most Holy',
    language: 'English',
    category: 'Communion',
    lyrics: `O Sacrament most holy,
O Sacrament divine,
All praise and all thanksgiving
Be every moment thine.

All praise and all thanksgiving
Be every moment thine.`
  },
  {
    id: 'e10',
    title: 'Immaculate Mary',
    language: 'English',
    category: 'Marian',
    lyrics: `Immaculate Mary, your praises we sing.
You reign now in heaven with Jesus our King.

Refrain:
Ave, Ave, Ave, Maria!
Ave, Ave, Ave, Maria!

In heaven the blessed your glory proclaim;
On earth we your children invoke your fair name.`
  },
  {
    id: 'e11',
    title: 'All the Earth Proclaim the Lord',
    language: 'English',
    category: 'Entrance',
    lyrics: `Refrain:
All the earth proclaim the Lord,
Sing your praise to God.

Serve you the Lord, heart filled with gladness.
Come into his presence singing for joy!

Know that the Lord is our creator.
Yes, he is our Father; we are his sons.`
  },
  {
    id: 'e12',
    title: 'Enter His Gates',
    language: 'English',
    category: 'Entrance',
    lyrics: `Enter his gates with thanksgiving in your heart
Enter his courts with praise.
Enter his gates with thanksgiving in your heart
For he has made me glad.

He has made me glad, He has made me glad
Jesus has made me glad.
Enter his gates with thanksgiving in your heart
For he has made me glad.`
  },
  {
    id: 'e13',
    title: 'In Bread We Bring You Lord',
    language: 'English',
    category: 'Offertory',
    lyrics: `In bread we bring you, Lord, our bodies' labor.
In wine we offer you our spirits' grief.
We do not ask you, Lord, who is my neighbor,
But stand united now, one in belief.

Refrain:
For we have gladly heard your Word, your holy Word,
And now in answer, Lord, our gifts we bring.
Our selfish hearts make true, our failing faith renew,
Our lives belong to you, our Lord and King.`
  },
  {
    id: 'e14',
    title: 'Take Our Bread',
    language: 'English',
    category: 'Offertory',
    lyrics: `Refrain:
Take our bread, we ask you;
Take our hearts, we love you;
Take our lives, oh Father,
We are yours, we are yours.

Yours as we stand at the table you set;
Yours as we eat the bread our hearts can't forget.
We are the sign of your life with us yet;
We are yours, we are yours.`
  },
  {
    id: 'e15',
    title: 'Bind Us Together',
    language: 'English',
    category: 'Recessional',
    lyrics: `Refrain:
Bind us together, Lord,
Bind us together
With cords that cannot be broken.
Bind us together, Lord,
Bind us together,
Bind us together with love.

There is only one God,
There is only one King,
There is only one Body,
That is why we sing.`
  },

  // --- HINDI ---
  {
    id: 'h1',
    title: 'Aaradhana (आराधना)',
    language: 'Hindi',
    category: 'Offertory',
    lyrics: `आराधना... आराधना...
आराधना... आराधना...

दिल से गाएं महिमा तेरी
तू ही है मुक्तिदाता
जीवन का तू ही आधार
तुझ बिन कोई नहीं हमारा

यीशु मसीह की जय...`
  },
  {
    id: 'h2',
    title: 'Tu Hi Rab Hai (तू ही रब है)',
    language: 'Hindi',
    category: 'General',
    lyrics: `तू ही रब है, तू ही सब है
तू ही कल था, तू ही अब है
तू ही रब है...

तेरी सृष्टि गाती है महिमा तेरी
चांद तारे गाते हैं महिमा तेरी`
  },
  {
    id: 'h3',
    title: 'Pyasa Hiran (प्यासा हिरन)',
    language: 'Hindi',
    category: 'Communion',
    lyrics: `जैसे प्यासा हिरन पानी को ढूँढता है
वैसे मेरा दिल, तुझको ढूँढता है

तू ही मेरे मन की आस
तू ही मेरी प्यास
तुझको ही मैं पूजूं, ओ मेरे प्रभु`
  },
  {
    id: 'h4',
    title: 'Chotti Si Zindagi (छोटी सी ज़िंदगी)',
    language: 'Hindi',
    category: 'Recessional',
    lyrics: `छोटी सी ज़िंदगी है, काम बहुत हैं
इस जहां में प्रभु के, नाम बहुत हैं

प्रेम का दीप जलाते चलो
राह में फूल बिछाते चलो`
  },
  {
    id: 'h5',
    title: 'Maa Tujhe Pranaam (माँ तुझे प्रणाम)',
    language: 'Hindi',
    category: 'Marian',
    lyrics: `माँ तुझे प्रणाम, शत शत प्रणाम
तू है दया की सागर माँ
तू है ममता की मूरत माँ

तेरी छाया में हम पलते हैं
तेरे आँचल में हम खिलते हैं`
  },
  {
    id: 'h6',
    title: 'Yeshu Bulata Tumhe (यीशु बुलाता तुम्हें)',
    language: 'Hindi',
    category: 'Entrance',
    lyrics: `यीशु बुलाता तुम्हें
आओ मेरे पास, आओ मेरे पास
थके मांदे लोगों
आओ मेरे पास

जीवन का जल मैं तुम्हें पिलाऊंगा
शांति मैं तुम्हें दूंगा`
  },
  {
    id: 'h7',
    title: 'Hum Honge Kamyab (हम होंगे कामयाब)',
    language: 'Hindi',
    category: 'Recessional',
    lyrics: `हम होंगे कामयाब, हम होंगे कामयाब
हम होंगे कामयाब एक दिन
ओहो मन में है विश्वास, पूरा है विश्वास
हम होंगे कामयाब एक दिन

होगी शांति चारों ओर, होगी शांति चारों ओर
होगी शांति चारों ओर एक दिन...`
  },
  {
    id: 'h8',
    title: 'Chadhata Hu Main (चढ़ता हूँ मैं)',
    language: 'Hindi',
    category: 'Offertory',
    lyrics: `चढ़ता हूँ मैं, वेदी पर तेरी
पवित्र दिल से, प्रभु जी
कबूल कर लो, भेंट मेरी
कबूल कर लो, भेंट मेरी

रोटी और दाखरस, लाये हैं हम
अर्पण करते हैं, तुझको हम`
  },
  {
    id: 'h9',
    title: 'Khushkhabri (खुशखबरी)',
    language: 'Hindi',
    category: 'Entrance',
    lyrics: `खुशखबरी, खुशखबरी, खुशखबरी
यीशु मसीह आया है
खुशखबरी, खुशखबरी, खुशखबरी

पापियों को बचाने, आया है वो
मुक्ति दिलाने, आया है वो`
  },

  // --- PUNJABI ---
  {
    id: 'p1',
    title: 'Rabb Di Sifat (ਰੱਬ ਦੀ ਸਿਫ਼ਤ)',
    language: 'Punjabi',
    category: 'Entrance',
    lyrics: `ਰੱਬ ਦੀ ਸਿਫ਼ਤ ਕਰਾਂ ਮੈਂ ਕਿਵੇਂ
ਉਹਦੀ ਮਹਿਮਾ ਅਪਾਰ ਹੈ
ਜਿਸਨੇ ਸਾਜਿਆ ਸਾਰਾ ਜਗ
ਉਹ ਸਭ ਦਾ ਪਾਲਣਹਾਰ ਹੈ

ਆਓ ਰਲ ਮਿਲ ਗਾਈਏ
ਉਸਦੀ ਵਡਿਆਈ ਗਾਈਏ`
  },
  {
    id: 'p2',
    title: 'Yeshu Mere Naal (ਯਿਸੂ ਮੇਰੇ ਨਾਲ)',
    language: 'Punjabi',
    category: 'General',
    lyrics: `ਯਿਸੂ ਮੇਰੇ ਨਾਲ ਨਾਲ ਚੱਲਦਾ
ਮੈਨੂੰ ਕੋਈ ਡਰ ਨਹੀਂ
ਉਹ ਮੇਰਾ ਰਾਖਾ ਹੈ
ਮੈਨੂੰ ਕੋਈ ਫਿਕਰ ਨਹੀਂ

ਹਨੇਰੀਆਂ ਰਾਤਾਂ ਵਿੱਚ ਉਹ ਰੋਸ਼ਨੀ ਹੈ
ਮੇਰੀ ਜ਼ਿੰਦਗੀ ਦਾ ਉਹ ਸਹਾਰਾ ਹੈ`
  },
  {
    id: 'p3',
    title: 'Tera Lahu (ਤੇਰਾ ਲਹੂ)',
    language: 'Punjabi',
    category: 'Communion',
    lyrics: `ਤੇਰਾ ਲਹੂ ਮੇਰੇ ਲਈ ਵਹਾਇਆ ਗਿਆ
ਤੇਰਾ ਸਰੀਰ ਮੇਰੇ ਲਈ ਤੋੜਿਆ ਗਿਆ

ਇਹ ਯਾਦਗਾਰੀ ਹੈ ਤੇਰੇ ਪਿਆਰ ਦੀ
ਇਹ ਨਿਸ਼ਾਨੀ ਹੈ ਸਾਡੀ ਮੁਕਤੀ ਦੀ`
  },
  {
    id: 'p4',
    title: 'Shukrana (ਸ਼ੁਕਰਾਨਾ)',
    language: 'Punjabi',
    category: 'Offertory',
    lyrics: `ਸ਼ੁਕਰਾਨਾ ਤੇਰਾ ਸ਼ੁਕਰਾਨਾ
ਜੋ ਕੁਝ ਦਿੱਤਾ ਤੂੰ ਖੁਦਾਵੰਦਾ
ਉਸ ਲਈ ਤੇਰਾ ਸ਼ੁਕਰਾਨਾ

ਮੇਰੀ ਜ਼ਿੰਦਗੀ ਤੇਰੀ ਦਾਤ ਹੈ
ਹਰ ਸਾਹ ਤੇਰਾ ਉਪਕਾਰ ਹੈ`
  },
  {
    id: 'p5',
    title: 'Maa Mariam (ਮਾਂ ਮਰੀਅਮ)',
    language: 'Punjabi',
    category: 'Marian',
    lyrics: `ਮਾਂ ਮਰੀਅਮ ਤੂੰ ਕਿੰਨੀ ਪਿਆਰੀ ਹੈਂ
ਸਾਰੇ ਜੱਗ ਤੋਂ ਤੂੰ ਨਿਆਰੀ ਹੈਂ

ਤੇਰੀ ਗੋਦ ਵਿੱਚ ਯਿਸੂ ਖੇਡਿਆ
ਤੂੰ ਰੱਬ ਦੀ ਮਾਂ ਕਹਾਇਆ`
  },
  {
    id: 'p6',
    title: 'Aao Ji Aao (ਆਓ ਜੀ ਆਓ)',
    language: 'Punjabi',
    category: 'Entrance',
    lyrics: `ਆਓ ਜੀ ਆਓ, ਪ੍ਰਭੂ ਦੇ ਘਰ ਆਓ
ਖੁਸ਼ੀਆਂ ਮਨਾਓ, ਪ੍ਰਭੂ ਦੇ ਗੁਣ ਗਾਓ

ਉਹ ਸਾਡਾ ਪਿਤਾ ਹੈ, ਅਸੀਂ ਉਸਦੇ ਬੱਚੇ
ਦਿਲਾਂ ਨੂੰ ਖੋਲੋ, ਪ੍ਰਭੂ ਨੂੰ ਮਿਲੋ`
  },
  {
    id: 'p7',
    title: 'Hallelujah (ਹਲਲੂਯਾਹ)',
    language: 'Punjabi',
    category: 'Gloria',
    lyrics: `ਹਲਲੂਯਾਹ, ਹਲਲੂਯਾਹ, ਹਲਲੂਯਾਹ
ਪ੍ਰਭੂ ਦੀ ਉਸਤਤ ਕਰੋ

ਧਰਤੀ ਤੇ ਅਕਾਸ਼ ਉਸਦੀ ਰਚਨਾ
ਸਭ ਜੀਵ ਜੰਤੂ ਉਸਦੀ ਰਚਨਾ`
  }
];