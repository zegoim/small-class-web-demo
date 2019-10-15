ssh-agent bash
ssh-add ~/.ssh/id_rsa
ssh xieyunming@access.oa.zego.im
ssh jms@106.14.169.119

sudo su -
zego.im 106.14.169.119

    location /app {
        try_files $uri /app/index.html;
    }
    