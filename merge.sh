nvm use 17.9.1
git pull origin master
cd /CMS/communitysupervision.org
npm run build
rm -rf /var/www/communitysupervision.org/html/build
mv build /var/www/communitysupervision.org/html
sudo systemctl restart httpd.service
