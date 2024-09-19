def customConfig(env) {
        if (env == 'master') {
                customconf = ['/home/ubuntu/formation-back','formationv2','ubuntu','192.168.4.146']
                return customconf
        }
}
pipeline {
    agent any
    environment {
      BRANCH_NAME = "${env.BRANCH_NAME}"
    }


    stages {
        stage('Deploy On-Promise') {
            steps {
                script {
                    def PATH = customConfig("${BRANCH_NAME}").get(0)
                                                def SERVER_SSHKEY = customConfig("${BRANCH_NAME}").get(1)
                    def SERVER_USER = customConfig("${BRANCH_NAME}").get(2)
                                                def SERVER_IP = customConfig("${BRANCH_NAME}").get(3)
                    sshagent(credentials: [SERVER_SSHKEY]) {

                     sh """
                    rsync -e "ssh -o StrictHostKeyChecking=no" -av --delete --exclude-from=.gitignore --exclude ".env"  --exclude='node_modules' ./ ${SERVER_USER}@${SERVER_IP}:${PATH}
                    """
                      sh """ ssh -o StrictHostKeyChecking=no  ${SERVER_USER}@${SERVER_IP} ./deploy-pm2-bk.sh """


                    }
                }
            }
        }

    }

    post {
        always {
            echo 'clean up workspace'
        }
    }
}
