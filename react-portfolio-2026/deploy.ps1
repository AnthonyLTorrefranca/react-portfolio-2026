npm run build
scp -i "$env:USERPROFILE\.ssh\id_ed25519_anthony" -P 9022 -r .\dist\. lcidbymw@13.228.141.107:~/public_html/anthony/
ssh -i "$env:USERPROFILE\.ssh\id_ed25519_anthony" -p 9022 lcidbymw@13.228.141.107 "find ~/public_html/anthony -type d -exec chmod 755 {} +; find ~/public_html/anthony -type f -exec chmod 644 {} +"