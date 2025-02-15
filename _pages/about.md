---
permalink: /
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hirusha Madhuwantha</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background: #f4f4f4;
            color: #333;
            line-height: 1.6;
        }
        .container {
            max-width: 900px;
            margin: 40px auto;
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            display: flex;
            align-items: center;
            gap: 20px;
        }
        .image-container {
            flex: 40%;
            display: flex;
            justify-content: center;
        }
        .image-container img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
        }
        .text-content {
            flex: 60%;
        }
        h1 {
            color: #222;
            font-size: 1.8em;
        }
        a {
            color: #0077cc;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        .section {
            margin-top: 30px;
        }
        .section h2 {
            border-bottom: 2px solid #0077cc;
            padding-bottom: 5px;
        }
        ul {
            list-style: none;
            padding: 0;
        }
        ul li {
            padding: 5px 0;
        }
        .footer {
            text-align: center;
            margin-top: 20px;
            font-size: 14px;
        }
        @media (max-width: 600px) {
            .header {
                flex-direction: column;
                text-align: center;
            }
            .image-container {
                flex: 100%;
            }
            .text-content {
                flex: 100%;
            }
        }
    </style>
</head>
<body>

    <div class="container">
        <div class="header">
            <div class="image-container">
                <img src="/images/Header_image.jpg" alt="Header_image">
            </div>
            <div class="text-content">
                <h1>👋🏼 Hello there, I’m Hirusha Madhuwantha!</h1>
                <p>
                    I’m passionate about how geometry processing can transform AI, robotics, additive manufacturing, and 4D printing. 
                    As a Research Intern at the <a href="https://www.sutd.edu.sg/" target="_blank">Singapore University of Technology and Design</a>, 
                    I explore how geometric principles can help design adaptive structures and improve fabrication processes.
                </p>
            </div>
        </div>

        <div class="section">
            <h2>🎓 Education</h2>
            <ul>
                <li><strong>Research Intern, DManD (SUTD)</strong> | 12/2024 – 06/2025</li>
                <li><strong>B.Sc. Electronic and Telecommunication Engineering</strong>, University of Moratuwa | 08/2022 – 05/2026</li>
            </ul>
        </div>

        <div class="footer">
            📧 Email: <a href="mailto:hirushamaduwantha0@gmail.com">hirushamaduwantha0@gmail.com</a>
        </div>
    </div>

</body>
</html>
