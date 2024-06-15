.projects{
    background-color: black;
    text-align: center;
}

.projects .content {
  margin-top: 30px;  
}

.project-card{
    background-color: #fff;
    border: 1px splid #fff;
    min-height: 22em;
    width: 33rem;
    overflow: hidden;
    border-radius: 10px;
    margin: 20px;
    transition: 0.4s ease;
}

.project-card:hover {
    transform: scale(1.1);
}

.project-image img{
    width: 100%;
}

.project-card:hover .project-image {
   opacity: 0.7;
}

.project-info {
    padding: 1em;
}

.project-category {
    font-size: 0.9em;
    color: #000000ec;
}

.project-title {
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
    font-weight: 800;
    margin-top: 10px;
    color: #6b14149a;
}

#code {
    font-size: 0.5em;
}

.more-details{
    text-decoration: none;
    color: #3a6cf4;
}

.more-details:hover {
    color: #601cfc;
}

@media screen and (max-width: 680px) {
    .project-card{
        width: 25rem;
    }
}


@media screen and (max-width: 480px) {
    .project-card{
        width: 22rem;
    }
}
