This is a `Resume Builder` for users who would like to showcase their professional experience as a full-fledged website. This application works with the [`Contentful CMS (Content Management System)`](https://www.contentful.com/) to render content.

Th use of CMS has been done to make sure that in future once the resume is ready we don't have to make any code changes, just the CMS changes would suffice and update your resume website automatically.

## Demo

Here is a [demo](https://shashwat-goyal.netlify.app/) for reference:

## Getting Started

 - First, clone the repository code / download as zip.
 - Create an account on [contenful](https://www.contentful.com/).
 - Once you signup, you will be assigned your own space where you can go ahead and create your content.
 - Please note that you will have to design your resume content as shown in the entity relationship diagram below to be able to make the application work correctly.
![alt text](https://github.com/Shashwat-Goyal/resume/blob/main/Entity%20Relationship%20Diagram.png?raw=true)
 - The code below shows the same relationship as JSON.

```bash
{
    "profile": {
        "firstName": "Shashwat",
        "lastName": "Goyal",
        "designation": "Front-End & Web Developer",
        "dateOfBirth": "1995-07-15T00:00-05:00",
        "phoneNumber": "959-529-1931",
        "email": "shashwatgoyal05@gmail.com",
        "address": {
            "addressLine1": "375 Hudson Street",
            "city": "New York",
            "state": "NY",
            "country": "United States",
            "zipcode": "10014"
        }
    },
    "testimonials": [
        {
            "name": "Devinder Singh",
            "designation": "Byteline Inc.",
            "date": "2022-09-18T00:00-05:00",
            "recommendation": "Shashwat is a great developer! He delivers high-quality work on time. Always very adjusting to taking on tasks outside his comfort zone. Can easily pick new technical skills.",
            "profileImage": "Image"
        }
    ],
    "socialConnections": [
        {
            "fields": {
                "url": "https://medium.com/@shashwatgoyal05",
                "title": "Know more on Medium",
                "icon": "medium"
            }
        }
    ],
    "assets": {
        "cover": "Image",
        "profileImage": "Image",
        "avatar": "Image"
    },
    "skills": [
        {
            "name": "Javascript",
            "proficiency": 90
        }
    ],
    "experiences": {
        "title": "Professional Experience",
        "education": [
            {
                "degree": "Bachelor of Technology in Electrical Engineering",
                "yearStart": 2012,
                "yearEnd": 2016,
                "institution": "Dehradun Institute of Technology, Uttarakhand Technical University, Dehradun",
                "result": "81.24%"
            }
        ],
        "professionalExperience": [
            {
                "designation": "Senior Associate Xperience Technology",
                "yearStart": 2020,
                "organization": "Publicis Sapient, New York, NY",
                "details": [
                    "Develop interactive web applications using industry best practices to deliver high value and quality to Publicis Sapient clients.",
                    "Goldman Sachs : Worked in the Goldman Sachs account for building coaching applications that helps clients with their financial stability. Worked on React.js and GQL with TDD to deliver high quality web interfaces."
                ]
            }
        ]
    },
    "portfolio": [
        {
            "image": "Image",
            "url": "https://www.byteline.io/"
        }
    ]
}
```
 - Once you have finished adding the content on contentful, you will be needing a space id and access token to link the application with your contentful account. You can find it easily in the `Settings -> Api Keys` tab in the contentful website header.
 - Copy your space id and access token and then create a new file in your application at the root level `env.local` and add the following values in that file.
 ```bash
CONTENTFUL_SPACE_ID=YOUR_SPACE_ID
CONTENTFUL_ACCESS_TOKEN=YOUR_ACCESS_TOKEN
 ```

Now, run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You would see your resume in the browser with all the content coming from contentful CMS having all your information.

## Deployment

For deployment we can use any platform like Netlify, Heroku or Vercel to deploy the app

## Additional Steps

There is an option of configuring webhooks in contenful which will help in triggering auto deployment of your resume whenever any content change is made. This is beneficial as you just have to update the content whenever needed and rest takes care of itself.

Feel free to raise an issue incase of any issues/concerns. Happy to help :)